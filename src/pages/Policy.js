import React from 'react'

import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"privacy policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacypolicy.avif"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Privacy of Behavior and Action</p>
          <p>Privacy of Personal Data</p>
          <p>Privacy Of Location And Space</p>
          <p>Privacy Of Assocaition</p>
          <p>Privacy of Communication</p>
        </div>
      </div>
    </Layout>
  );
}

export default Policy

