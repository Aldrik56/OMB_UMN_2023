const CardRute = (props) => {
  console.log(props.data);
  return (
    <div style={props.style}>
      <div className="judul">{props.judul}</div>
      {props.data.map((e) => {
        return (
          <div className="card-timeline">
            <div className="card-content">
              <div className="flex card-subname">
                <p className="nama">{e.nama}</p>
                <p className="tanggal">{e.tanggal}</p>
              </div>

              <div>
                <p className="jenis-bus">Keberangkatan</p>
                <div className="flex flex-column">
                  <img
                    className="bus"
                    src="./Assets/RuteBus/busSamping.svg"
                    alt="bus berangkat"
                  />
                </div>
                <div className="flex timeline justify-between timeline-container">
                  {e.berangkat.map((x, index) => {
                    return (
                      <div
                        className={
                          "flex flex-column text-center step step" + index
                        }>
                        <p className="tanggal tempat">{x.tempat}</p>
                        <p>{x.jam}</p>
                      </div>
                    );
                  })}
                </div>
                <br />

                {e.pulang.length > 0 && (
                  <>
                    <p className="jenis-bus">Kepulangan</p>
                    <div className="flex flex-column">
                      <img
                        className="bus-pulang"
                        src="./Assets/RuteBus/busSamping.svg"
                        alt="bus berangkat"
                      />
                    </div>
                    <div className="flex timeline justify-between timeline-container pulang">
                      {e.pulang.map((x, index) => {
                        return (
                          <div
                            className={
                              "flex flex-column text-center step step" + index
                            }>
                            <p className="tanggal tempat">{x.tempat}</p>
                            <p>{x.jam ? x.jam : null}</p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardRute;
