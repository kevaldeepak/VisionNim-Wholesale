
function MapComponent() {
    // You can use a template string to define the iframe content
    const iframeContent = `
    <div  style={{ width: '100%', height: '100%' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4963.132523196151!2d-0.3015238007285063!3d51.53951481035937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876123e083821a5%3A0x6a980a69b31d00c4!2sAlperton%2C%20Wembley!5e0!3m2!1sen!2suk!4v1693899438133!5m2!1sen!2suk"
        width="100%"
        height="300px"
        style={{ border: '0' }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  `;

    return (
        <>
            <div className='test-map' dangerouslySetInnerHTML={{ __html: iframeContent }} />
        </>
    );
}

export default MapComponent;
