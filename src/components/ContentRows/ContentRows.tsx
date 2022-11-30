import { useEffect, useState } from "react";
import { fetchRequest, MovieResponse, MovieResult } from "../../common/api";

import s from "./contentRows.module.scss";

type RowProp = {
  endpoint: string;
  title: string;
};

export const ContentRows: React.FC<RowProp> = ({ title, endpoint }) => {
  const [rowData, setRowData] = useState<MovieResult[]>([]);

  const fetchRowData = async () => {
    const response = await fetchRequest<MovieResponse<MovieResult[]>>(endpoint);
    setRowData(response.results);
  };

  useEffect(() => {
    fetchRowData();
  }, []);

  return (
    <section className={s.contentRows}>
      <h2 className={s.title}>{title}</h2>
      <section className={s.wrapper}>
        {rowData?.map((row) => (
          <div className={s.eachImg} key={row.id}>
            <img
              className={s.img}
              src={`${import.meta.env.VITE_BASE_IMAGE_URL}/${row.poster_path}`}
              alt={row.title}
            />
          </div>
        ))}
      </section>
    </section>
  );
};
