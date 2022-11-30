import { ENDPOINT } from "../common/endpoints";
import { ContentRows } from "../components/ContentRows/ContentRows";

import s from "./browse.module.scss";

export const Browse = () => {
  return (
    <section className={s.browse}>
      <section>banner image</section>
      <ContentRows endpoint={ENDPOINT.MOVIES_POPULAR} title="Popular" />
      <ContentRows endpoint={ENDPOINT.MOVIES_TOP_RATED} title="Top Rated" />
      <ContentRows endpoint={ENDPOINT.MOVIES_NOW_PLAYING} title="Now Playing" />
    </section>
  );
};
