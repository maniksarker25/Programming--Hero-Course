import React from "react";

const Modal = (props) => {
    console.log(props.singleData)
    const {image_link,features,integrations,input_output_examples,description
    }=props.singleData;
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="card w-full bg-base-100 shadow-xl p-6">
                <p className="font-bold text-xl">{description}</p>
                <div className="mt-12 flex justify-between">
                    <div>
                        <h1 className="font-bold text-2xl">Features</h1>
                        {
                            Object.values(features || {}).map((value,index)=><p>{index + 1}.{value.feature_name?value.feature_name:'Not Found'}</p>)
                        }
                    </div>
                    <div>
                    <h1 className="font-bold text-2xl">Integrations</h1>
                    {
                        integrations?integrations.map(int=><p>{int}</p>):'NO data Found'
                    }
                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  src={image_link && image_link[0]}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center text-4xl font-bold">{input_output_examples?input_output_examples[0].input:'Can you give any example?'}</h2>
                <p className="text-center ">{input_output_examples?input_output_examples[0].output:'No! Not Yet! Take a break!!!'}</p>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
