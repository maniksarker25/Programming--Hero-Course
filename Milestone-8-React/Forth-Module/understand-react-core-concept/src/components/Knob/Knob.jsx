import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border:'2px solid salmon',margin:'10px'}}>
            <h3>This is Knob Component</h3>
            <p>Steps is here:{props.steps}</p>

        </div>
    );
};

export default Knob;