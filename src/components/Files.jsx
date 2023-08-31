function Files() {
  return (
    <div className="files">
      <h1 class="p-relative">Files</h1>
      <div className="files-page d-flex m-20 gap-20">
        <div class="files-stats widget">
          <h2 class="mt-0 mb-15 txt-c-mobile">Files Statistics</h2>
          <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i class="fa-regular fa-file-pdf fa-lg blue center-flex c-blue icon"></i>
            <div class="info">
              <span>PDF Files</span>
              <span class="c-grey d-block mt-5">130 Files</span>
            </div>
            <div class="size c-grey">6.5GB</div>
          </div>

          <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i class="fa-regular fa-images fa-lg green center-flex c-green icon"></i>
            <div class="info">
              <span>Images</span>
              <span class="c-grey d-block mt-5">115 Files</span>
            </div>
            <div class="size c-grey">3.5GB</div>
          </div>

          <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i class="fa-regular fa-file-word fa-lg red center-flex c-red icon"></i>
            <div class="info">
              <span>Word Files</span>
              <span class="c-grey d-block mt-5">110 Files</span>
            </div>
            <div class="size c-grey">3.2GB</div>
          </div>

          <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i class="fa-regular fa-file-word fa-lg orange center-flex c-orange icon"></i>
            <div class="info">
              <span>CSV Files</span>
              <span class="c-grey d-block mt-5">99 Files</span>
            </div>
            <div class="size c-grey">2.9GB</div>
          </div>

          <a class="upload bg-blue c-white fs-13 rad-6 d-block w-fit">
            <i class="fa-solid fa-upload mr-10"></i>
            Upload
          </a>
        </div>
        <div className="files-content d-grid gap-20">
          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/pdf.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.pdf</div>
            <p class="c-grey fs-13">Zead Hajebrahem</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>20/06/2020</span>
              <span>5.5MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/avi.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.avi</div>
            <p class="c-grey fs-13">Admin</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/05/2021</span>
              <span>12.5MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/eps.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.eps</div>
            <p class="c-grey fs-13">Uploader</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>18/06/2021</span>
              <span>2.7MB</span>
            </div>
          </div>
          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/psd.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.psd</div>
            <p class="c-grey fs-13">User</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>23/06/2021</span>
              <span>15.1MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/dll.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.pdf</div>
            <p class="c-grey fs-13">Zead Hajebrahem</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>20/06/2020</span>
              <span>2.2MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/png.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.png</div>
            <p class="c-grey fs-13">Designer</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>28/06/2021</span>
              <span>1.1MB</span>
            </div>
          </div>
          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/dll.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.dll</div>
            <p class="c-grey fs-13">Coder</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>28/06/2021</span>
              <span>2.4MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/png.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.png</div>
            <p class="c-grey fs-13">Zead Hajebrahem</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>02/07/2021</span>
              <span>1.3MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/psd.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.psd</div>
            <p class="c-grey fs-13">User</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>06/07/2022</span>
              <span>15.4MB</span>
            </div>
          </div>
          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/pdf.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.pdf</div>
            <p class="c-grey fs-13">Zead Hajebrahem</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>10/07/2021</span>
              <span>6.4MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/avi.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.avi</div>
            <p class="c-grey fs-13">Admin</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>14/07/2021</span>
              <span>13.4MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/eps.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.eps</div>
            <p class="c-grey fs-13">Uploader</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>21/07/2021</span>
              <span>2.9MB</span>
            </div>
          </div>
          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/pdf.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.pdf</div>
            <p class="c-grey fs-13">Zead Hajebrahem</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>26/07/2021</span>
              <span>5.1MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/avi.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.avi</div>
            <p class="c-grey fs-13">Admin</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>28/07/2021</span>
              <span>11.8MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/eps.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.eps</div>
            <p class="c-grey fs-13">Zead Hajebrahem</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>02/08/2021</span>
              <span>3.2MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/psd.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.psd</div>
            <p class="c-grey fs-13">User</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>04/08/2021</span>
              <span>15.8MB</span>
            </div>
          </div>
          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/dll.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.dll</div>
            <p class="c-grey fs-13">Coder</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>08/08/2021</span>
              <span>2.3MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/png.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.png</div>
            <p class="c-grey fs-13">Designer</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>09/08/2021</span>
              <span>1.6MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/dll.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.dll</div>
            <p class="c-grey fs-13">Coder</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>12/08/2021</span>
              <span>2.1MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/png.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.png</div>
            <p class="c-grey fs-13">Designer</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>16/08/2021</span>
              <span>1.6MB</span>
            </div>
          </div>
          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/psd.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.psd</div>
            <p class="c-grey fs-13">User</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>20/08/2021</span>
              <span>16.8MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/pdf.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.pdf</div>
            <p class="c-grey fs-13">Zead Hajebrahem</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>24/08/2021</span>
              <span>5.7MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/avi.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.avi</div>
            <p class="c-grey fs-13">Admin</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>28/08/2021</span>
              <span>13.2MB</span>
            </div>
          </div>

          <div class="file p-10 bg-white rad-10">
            <i class="fa-solid fa-download c-grey p-absolute"></i>
            <div class="icon txt-c">
              <img
                class="mt-15 mb-15"
                src={process.env.PUBLIC_URL + "/assets/imgs/eps.svg"}
                alt=""
              />
            </div>
            <div class="txt-c mb-10 fs-14">my-file.eps.svg</div>
            <p class="c-grey fs-13">Uploader</p>
            <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>30/08/2021</span>
              <span>2.9MB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Files;
