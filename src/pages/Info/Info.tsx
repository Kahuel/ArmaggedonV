import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, useParams } from "react-router-dom";
import { getAsteroidInfo } from "api/api";
import { Asteroid, CloseApproach } from "types/types";
import { asteroidActions } from "store/actions";

export const Info: React.FC = () => {
  const dispatch = useDispatch();
  const [asteroid, setAsteroid] = useState<Asteroid>();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const asteroidInfo = async () => {
      const response = await getAsteroidInfo(id);
      setAsteroid(response.data);
    };
    asteroidInfo();
  }, []);

  if (!asteroid) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {asteroid.id} {asteroid.name}{" "}
      {asteroid.close_approach_data.map((el: CloseApproach) => (
        <div style={{ border: `0.1em solid #000000` }}>
          {el.close_approach_date_full}
          <p>{Math.round(Number(el.relative_velocity.kilometers_per_hour))}</p>
          <p>{Math.round(Number(el.miss_distance.kilometers))}</p>
          <p>{el.orbiting_body}</p>{" "}
        </div>
      ))}
    </div>
  );
};
