import React , { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPartenaire } from '../JS/actions/partenaireAction';
import PartenaireCard from "./PartenaireCard";

const CrecheList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPartenaire());
    }, []);
    const partenaires = useSelector((state) => state.partenaires);
    return (
      <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
        {partenaires &&
          partenaires.filter(partenaire=>partenaire.categorie=='creche').map((partenaire) => (
            <PartenaireCard key={partenaire._id} partenaire={partenaire} />
          ))}
      </div>
    );
  };
export default CrecheList
