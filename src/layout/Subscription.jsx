import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Subscription = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast("Cooming Soon...");
  };

  return (
    <section className="utf_cta_area_item utf_cta_area2_block">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="utf_subscribe_block">
              <div className="col-xl-8 col-md-7">
                <div className="section-heading">
                  <h2 className="utf_sec_title_item utf_sec_title_item2">
                    Subscribe to Our Newsletter!
                  </h2>
                  <p className="utf_sec_meta">
                    Subscribe to get latest updates and information.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-5">
                <div className="contact-form-action">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <i className="icon-material-baseline-mail-outline"></i>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter your email"
                      required=""
                      {...register("email")}
                    />
                    <button className="utf_theme_btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
