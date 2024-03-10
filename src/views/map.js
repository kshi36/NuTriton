import Iframe from 'react-iframe'

export default function Map() {
    return (
        <div className='main' >
        {/* <div ref={mapContainer} className="map-container" style={{height: 800}} /> */}
        <iframe id="if1" width="120%" height="800" style={{visibility:"visible"}} src="https://act.ucsd.edu/maps/"></iframe>
        </div>
    );
}
