import Reveal from './Reveal.jsx'
import { img } from '../assets/media.js'

function ImageWrap({ image, alt, shadow }) {
  return (
    <div className={'layout34_image-wrapper' + (shadow ? ' shadow-medium' : '')}>
      <img src={img[image]} alt={alt} className="layout34_image" loading="lazy" />
    </div>
  )
}

// A single case-study process step (Webflow section_layout34). Image side
// alternates: 'left' = image-left (section_layout34 case-study),
// 'right' = image-right (section_layout34 left).
export default function ProcessStep({ step }) {
  const { number, stepTitle, imageSide, image, imageShadow, alt, items } = step
  const sectionClass = 'section_layout34 ' + (imageSide === 'left' ? 'case-study' : 'left')

  const imageEl = <ImageWrap image={image} alt={alt} shadow={imageShadow} />
  const textEl = (
    <div className="layout34_content-left">
      <div className="layout34_item-list">
        <div className="layout34_item underlined">
          <div>
            <div className="margin-bottom margin-xsmall flex">
              <h3 className="heading-style-h5 middle">{number}</h3>
              <h3 className="heading-style-h2">{stepTitle}</h3>
            </div>
          </div>
        </div>
        {items.map((it, i) => (
          <div key={i} className={'layout34_item' + (i === 0 ? ' margin-top' : '')}>
            <div className="layout34_item-text-wrapper">
              <div className="margin-bottom margin-xsmall">
                <h3 className="heading-style-h3">{it.heading}</h3>
              </div>
              <p className="text-size-regular">{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className={sectionClass}>
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="layout34_component">
              <Reveal from="up" className="layout34_content mobile">
                {imageSide === 'left' ? (
                  <>{imageEl}{textEl}</>
                ) : (
                  <>{textEl}{imageEl}</>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
