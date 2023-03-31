


export const Loader = ({show}) => {
    return (
      <div className={show ? `loader_container` : 'loader_container loader_hide'}>
        <span className="loader"></span>
      </div>
    );
  };
  