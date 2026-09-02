/**
 * Purely decorative CSS/SVG device mock used in the hero. It is not a real
 * screenshot of any shipped app — swap in real store screenshots when they
 * are available (see README).
 */
export default function PhoneMock() {
  const bars = [42, 68, 55, 88, 61, 74, 96];

  return (
    <div className="phone" aria-hidden="true">
      <div className="phone__glow" />
      <div className="phone__frame">
        <div className="phone__notch" />
        <div className="phone__screen">
          <div className="phone__statusbar">
            <span>9:41</span>
            <span className="phone__statusIcons">
              <i />
              <i />
              <i />
            </span>
          </div>

          <div className="phone__head">
            <div className="phone__avatar" />
            <div className="phone__headText">
              <span className="phone__line phone__line--sm" />
              <span className="phone__line phone__line--xs" />
            </div>
          </div>

          <div className="phone__card">
            <span className="phone__cardLabel">Weekly progress</span>
            <div className="phone__chart">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className="phone__bar"
                  style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
                />
              ))}
            </div>
          </div>

          <div className="phone__row">
            <div className="phone__tile" />
            <div className="phone__tile" />
          </div>

          <div className="phone__list">
            <div className="phone__item">
              <span className="phone__dot" />
              <span className="phone__line phone__line--md" />
            </div>
            <div className="phone__item">
              <span className="phone__dot phone__dot--alt" />
              <span className="phone__line phone__line--lg" />
            </div>
            <div className="phone__item">
              <span className="phone__dot" />
              <span className="phone__line phone__line--sm" />
            </div>
          </div>

          <div className="phone__tabbar">
            <i className="is-active" />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>

      <span className="phone__chip phone__chip--1">Flutter</span>
      <span className="phone__chip phone__chip--2">BLoC</span>
      <span className="phone__chip phone__chip--3">Firebase</span>
    </div>
  );
}
