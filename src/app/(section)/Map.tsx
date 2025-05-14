import React from "react";

const Map: React.FC = () => {
  return (
    <section className="h-full w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2260.5431365101354!2d-2.8419134234081955!3d53.410976572308016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b1f61b6416975%3A0x27b26447d315382a!2sSolasta%20Steakhouse%20%26%20%C3%81%20La%20Carte!5e1!3m2!1sen!2sin!4v1747241195437!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0px" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[50vh] w-full grayscale invert"
      ></iframe>
    </section>
  );
};

export default Map;
