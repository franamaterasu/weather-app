import { BiErrorCircle } from "react-icons/bi";
import "./emptyState.scss";

const EmptyState = () => {
  return (
    <section className="empty-state">
      <BiErrorCircle className="empty-state__icon" />
      <p className="empty-state__description">No existen resultados</p>
    </section>
  );
};

export default EmptyState;
