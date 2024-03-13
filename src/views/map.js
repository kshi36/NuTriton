import Iframe from 'react-iframe'

export default function Map() {
    return (
        <div className='main' >
        {/* <div ref={mapContainer} className="map-container" style={{height: 800}} /> */}
        {/*<iframe id="if1" width="120%" height="800" style={{visibility:"visible"}} src="https://act.ucsd.edu/maps/"></iframe>*/}
            <div>
                <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                        src="https://maps.google.com/maps?width=100%%26amp;height=600&amp;hl=en&amp;q=UCSD%20Food+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps devices</a></iframe>
            </div>
        </div>
    );
}
