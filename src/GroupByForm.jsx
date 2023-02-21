// This component takes in state - as props - that pertains to the current state of the form. 

function GroupByForm({ handleFormChange, handleFormSubmit, groupBy, message, success, splitArray }) {
  return (
    <>
      <div className="form-container mx-auto mt-5 border px-3 pb-3">
        <form className="my-4" action="" onSubmit={handleFormSubmit} >
            <h2 className="mt-2 mb-4">
              Please enter the desired length of each subarray.
            </h2>
          <div className="container text-center">
            <div className="row">
              {message && <p className={success ? "message-success" : "message-failure"}
              >
                {message}
              </p>}
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                <input 
                    type="text"
                    className="form-control" 
                    id="groupBy" 
                    name="groupBy"
                    value={groupBy}
                    placeholder="Enter number"
                    onChange={handleFormChange}
                />
              </div>
              <div className="col-auto">
                  <button type="submit" disabled={!success}
                      className="btn btn-outline-primary"
                  >
                      Submit 
                  </button>
                  <label htmlFor="groupBy"></label>
              </div>
            </div>
          </div>
        </form>
        {success && splitArray &&
        <p className="show-result">
          {`Your split array: ${splitArray}`}
        </p>}
      </div>
    </>
  );
}
export default GroupByForm;