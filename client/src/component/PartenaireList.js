import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPartenaire } from '../JS/actions/partenaireAction';
import PartenaireCard from './PartenaireCard'

const PartenaireList = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPartenaire());
  }, []);
  const partenaires = useSelector((state) => state.partenaires.partenaires);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
      {partenaires &&
        partenaires.map((partenaire) => (
          <PartenaireCard key={partenaire._id} partenaire={partenaire} />
        ))}
    </div>
  );
};

export default PartenaireList
