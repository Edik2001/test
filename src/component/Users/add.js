import React from 'react';

const Add = () => {
    return (
        <div className={"add-form"}>
            <form>
                <div className={"form-group"}>
                    <label>Name</label>
                    <input type="text" name={"name"} />
                </div>
                <div className={"form-group"}>
                    <label>Surname</label>
                    <input type={"text"} name={"name"}/>
                </div>
                <div className={"form-group"}>
                    <button>Add</button>
                </div>

            </form>

        </div>
    );
};

export default Add;