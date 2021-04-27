import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./modal.css";

interface CloseApproach {
  closeApproachDate: string;
  kps: string;
  missDistance: string;
  orbitingBody: string;
}

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  asteroidInfo: {
    id: string;
    name: string;
    closeApproachData: CloseApproach[];
  };
}

export const Modal: React.FC<Props> = ({ active, setActive, asteroidInfo }) => {
  return (
    <div className="modal" onClick={() => {}}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        {asteroidInfo.id} {asteroidInfo.name}{" "}
        {asteroidInfo.closeApproachData.map((el: CloseApproach) => (
          <div>
            {el.closeApproachDate}
            <p>{el.kps}</p>
            <p>{el.missDistance}</p>
            <p>{el.orbitingBody}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
