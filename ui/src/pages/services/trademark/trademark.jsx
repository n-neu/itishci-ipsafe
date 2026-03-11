import { useState } from "react";

import "../template.css";
import "./trademark.css";

export default function Trademark() {

  return (
    <>
      <div className="service-container">
        <div className="info-wrapper">
            <h2>Trademark</h2>
            <p>A trademark is a word, a group of words, sign, symbol, logo or a combination thereof that identifies and differentiates the source of the goods or services of one entity from those of others. </p>
            <p>If you’re a business, distinguishing your goods or services from others gives you a competitive edge. Learn more about trademarks, how to apply for protection, and how to manage them.</p>
        </div>

        <div class="upload-container">
  <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 -960 960 960">
    <path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"/>
  </svg>
    <div className="options">
        <p>Take Photo</p>
        <p>File Upload</p>
    </div>
</div>
      </div>
    </>
  );
}
