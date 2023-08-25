import React from "react";
import ListEndActivity from "../../components/ListEndActivity";
import Other from "../../components/Other";

export default function EndActivity(props) {
  const { arrEndActivityByUserID, getUserId } = props;
  return (
    <div className=" tab-pane fade show " id="endactivity">
      <div className="row merged20">
        <div className="col-lg-8">
          <div className="">
            <ListEndActivity
              arrEndActivity={arrEndActivityByUserID}
              getUserId={getUserId}
            />
          </div>

          <div className="sp sp-bars" />
        </div>
        <Other />
      </div>
    </div>
  );
}