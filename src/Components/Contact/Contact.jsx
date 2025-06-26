import React from 'react';

export default function Contact() {

  function addProduct() {
    alert('Message Sent!');
    // هنا تقدر تضيف إرسال البيانات أو أي لوجيك آخر
  }

  return (
    <>
      <section id="order" className="w-75 mx-auto py-4">
        <h3 className="py-3 fw-bold">We Are Always Ready To Receive Your Inquiries</h3>

        <label htmlFor="ProductNameInput">Name</label>
        <input id="ProductNameInput" className="form-control mb-2" type="text" />

        <label htmlFor="ProductPriceInput">Telephone Number</label>
        <input id="ProductPriceInput" className="form-control mb-2" type="number" />

        <label htmlFor="ProductCategoryInput">Email</label>
        <input id="ProductCategoryInput" className="form-control mb-2" type="email" />

        <label htmlFor="ProductDescriptionInput">Message Content</label>
        <textarea id="ProductDescriptionInput" className="form-control mb-2" />

        <button onClick={addProduct} className="btn btn-sm btn-outline-info">Send</button>
      </section>
      <div className='brder mt-2 mb-2 align-items-center'></div>
      <div className='py-4 mt-2 out-Input text-center'>
        <div class="itemC">
          <h5 class="lead">Email: info@OSN+.com </h5>
          <h5 class="lead">  Phone: (+20) 111-251-4561 </h5>
         <h5 class="lead">Email: info@OSN+.com </h5>
           <h5 class="lead">  Phone: (+20) 111-251-4561 </h5>
           <h5 class="lead">Email: info@OSN+.com </h5>
         <h5 class="lead">  Phone: (+20) 111-251-4561 </h5>
         <h5 class="lead">Email: info@OSN+.com </h5>
         <h5 class="lead">  Phone: (+20) 111-251-4561 </h5>
        </div>

      </div>
    </>
  );
}
