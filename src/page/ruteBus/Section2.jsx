import CardRute from "./CardRute";
import { data1, data2, data3 } from "./data";

const Section2 = () => {
  return (
    <div id="s_2">
      <CardRute judul="Pembentukan Hari 1" data={data1} />
      <CardRute
        style={{ marginTop: "2rem" }}
        judul="Pembentukan Hari 2"
        data={data2}
      />
      <CardRute
        style={{ marginTop: "2rem" }}
        judul="Kuliah Perdana"
        data={data3}
      />
    </div>
  );
};

export default Section2;
