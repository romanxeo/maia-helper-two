import {FC} from "react";
import {classNames} from "06_shared/helpers/classNames";
import s from "./Footer.module.scss"

type TProps = {
  className?: string;
}

const Footer: FC<TProps> = props => {

  const {
    className
  } = props

  return (
    <div className={classNames(s.body, {}, [className])}>
        Footer
    </div>
  );
};

export {Footer};
