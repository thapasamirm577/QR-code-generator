import React, { Fragment, useState } from "react";
import { generator } from "./generate";

import classes from "./home.module.css";
import { saveAs } from "file-saver";

interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
}
const Home = () => {
  const [data, setData] = useState("");
  const [url, setUrl] = useState<{ url: string }>({ url: "" });
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(() => e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.length < 1) {
      setInfo(false);
      alert("Please enter your text or URL");
      return;
    }
    setLoading(true);
    const result = await generator(data);
    setUrl(() => {
      return result;
    });
    setLoading(false);
  };

  const saveFile = () => {
    saveAs(url.url, "myqrcode.png");
  };

  return (
    <Fragment>
      <main className={classes.home_main_container}>
        <section className={classes.home_section}>
          <header className={classes.home_header}>Generate your QR Code</header>
          <article className={classes.home_qr_body}>
            <form onSubmit={handleSubmit}>
              <div className={classes.indv_label}>
                <label htmlFor="text">Your text or url to make QR code</label>
              </div>
              <div className={classes.indv_input}>
                <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder="Enter text or paste url"
                  value={data}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.indv_btn}>
                <button
                  onClick={(e) => {
                    setInfo(!info);
                  }}
                >
                  Generate
                </button>
              </div>
            </form>
          </article>

          {info && (
            <article className={classes.result_qr_container}>
              <header className={classes.result_qr_header}>Your QR Code</header>
              {loading && <div className={classes.loading_qr}>Loading...</div>}
              {!loading && (
                <div className={classes.result_qr}>
                  <img src={url.url} alt="qr" />
                </div>
              )}
              {!loading && (
                <div className={classes.indv_download_btn}>
                  <button onClick={saveFile}>Download</button>
                </div>
              )}
            </article>
          )}
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
