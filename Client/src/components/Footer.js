import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-block d-sm-none footer-load">
        <ul className="footer-list">
          <li className="font-weight-bold">Lux event</li>
          <li>Vendors</li>
          <li className="font-weight-bold">Find Event</li>
          <li>Create</li>
          <li>Reserve</li>
          <li>Book</li>
          <li className="font-weight-bold">Terms &#38; Conditions</li>
          <li>Privacy policy</li>
          <li>Contact us</li>
          <li>FAQ</li>
        </ul>

        <div className="container text-center mb-3">
          <h4 className="mb-4"> <svg
            width="53"
            height="10"
            viewBox="0 0 53 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.564 0.504V0.744C3.292 0.752 3.084 0.784 2.94 0.84C2.804 0.888 2.712 0.984 2.664 1.128C2.616 1.264 2.592 1.48 2.592 1.776V7.728C2.592 8.016 2.616 8.232 2.664 8.376C2.712 8.52 2.804 8.616 2.94 8.664C3.084 8.704 3.292 8.724 3.564 8.724H4.44C4.944 8.724 5.324 8.652 5.58 8.508C5.844 8.364 6.032 8.128 6.144 7.8C6.264 7.472 6.352 7.032 6.408 6.48H6.684C6.66 6.728 6.648 7.056 6.648 7.464C6.648 7.616 6.652 7.836 6.66 8.124C6.676 8.404 6.7 8.696 6.732 9C6.324 8.984 5.864 8.976 5.352 8.976C4.84 8.968 4.384 8.964 3.984 8.964C3.744 8.964 3.424 8.964 3.024 8.964C2.632 8.964 2.212 8.968 1.764 8.976C1.316 8.976 0.896 8.984 0.504 9V8.76C0.776 8.744 0.98 8.712 1.116 8.664C1.26 8.616 1.356 8.52 1.404 8.376C1.452 8.232 1.476 8.016 1.476 7.728V1.776C1.476 1.48 1.452 1.264 1.404 1.128C1.356 0.984 1.26 0.888 1.116 0.84C0.98 0.784 0.776 0.752 0.504 0.744V0.504C0.672 0.512 0.892 0.52 1.164 0.528C1.436 0.536 1.728 0.539999 2.04 0.539999C2.32 0.539999 2.596 0.536 2.868 0.528C3.148 0.52 3.38 0.512 3.564 0.504ZM12.8507 2.688V7.704C12.8507 8.064 12.9147 8.332 13.0427 8.508C13.1787 8.676 13.4187 8.76 13.7627 8.76V9.012C13.5147 8.988 13.2667 8.976 13.0187 8.976C12.7867 8.976 12.5627 8.988 12.3467 9.012C12.1387 9.036 11.9467 9.08 11.7707 9.144V7.728C11.5707 8.248 11.2867 8.62 10.9187 8.844C10.5587 9.06 10.1867 9.168 9.80269 9.168C9.52269 9.168 9.27869 9.128 9.07069 9.048C8.86269 8.968 8.69069 8.856 8.55469 8.712C8.40269 8.552 8.29869 8.344 8.24269 8.088C8.18669 7.832 8.15869 7.516 8.15869 7.14V4.128C8.15869 3.768 8.09469 3.504 7.96669 3.336C7.83869 3.16 7.59869 3.072 7.24669 3.072V2.82C7.50269 2.844 7.75069 2.856 7.99069 2.856C8.22269 2.856 8.44269 2.844 8.65069 2.82C8.86669 2.788 9.06269 2.744 9.23869 2.688V7.404C9.23869 7.652 9.25469 7.88 9.28669 8.088C9.31869 8.296 9.39869 8.464 9.52669 8.592C9.65469 8.72 9.86269 8.784 10.1507 8.784C10.6227 8.784 11.0107 8.576 11.3147 8.16C11.6187 7.736 11.7707 7.22 11.7707 6.612V4.128C11.7707 3.768 11.7067 3.504 11.5787 3.336C11.4507 3.16 11.2107 3.072 10.8587 3.072V2.82C11.1147 2.844 11.3627 2.856 11.6027 2.856C11.8347 2.856 12.0547 2.844 12.2627 2.82C12.4787 2.788 12.6747 2.744 12.8507 2.688ZM16.5713 2.82V3.072C16.4193 3.072 16.2913 3.108 16.1873 3.18C16.0833 3.252 16.0713 3.352 16.1513 3.48L19.3553 8.148C19.4913 8.348 19.6113 8.492 19.7153 8.58C19.8193 8.66 19.9473 8.716 20.0993 8.748V9C20.0193 8.992 19.8953 8.984 19.7273 8.976C19.5673 8.96 19.4073 8.952 19.2473 8.952C18.9993 8.952 18.7313 8.96 18.4433 8.976C18.1633 8.984 17.9593 8.992 17.8313 9V8.748C17.9913 8.748 18.1233 8.712 18.2273 8.64C18.3313 8.56 18.3393 8.46 18.2513 8.34L15.0473 3.672C14.8873 3.44 14.7593 3.288 14.6633 3.216C14.5673 3.136 14.4473 3.088 14.3033 3.072V2.82C14.3833 2.828 14.5073 2.84 14.6753 2.856C14.8433 2.864 15.0033 2.868 15.1553 2.868C15.4113 2.868 15.6793 2.864 15.9593 2.856C16.2393 2.84 16.4433 2.828 16.5713 2.82ZM16.8953 5.868C16.8953 5.868 16.9113 5.924 16.9433 6.036C16.9833 6.14 17.0033 6.192 17.0033 6.192L16.0073 7.488C15.7993 7.76 15.6873 7.988 15.6713 8.172C15.6633 8.356 15.7393 8.496 15.8993 8.592C16.0593 8.68 16.2793 8.736 16.5593 8.76V9C16.4233 8.992 16.2713 8.988 16.1033 8.988C15.9353 8.98 15.7713 8.976 15.6113 8.976C15.4593 8.968 15.3193 8.964 15.1913 8.964C14.8393 8.964 14.5353 8.976 14.2793 9V8.76C14.4313 8.744 14.5873 8.676 14.7473 8.556C14.9153 8.428 15.1113 8.216 15.3353 7.92L16.8953 5.868ZM19.8593 2.82V3.06C19.7073 3.076 19.5393 3.156 19.3553 3.3C19.1793 3.436 18.9953 3.636 18.8033 3.9L17.4233 5.808C17.4233 5.808 17.4073 5.756 17.3753 5.652C17.3433 5.548 17.3273 5.496 17.3273 5.496L18.2633 4.188C18.5273 3.812 18.6433 3.54 18.6113 3.372C18.5873 3.196 18.3633 3.092 17.9393 3.06V2.82C18.1473 2.828 18.3193 2.836 18.4553 2.844C18.5993 2.852 18.7633 2.856 18.9473 2.856C19.3073 2.856 19.6113 2.844 19.8593 2.82ZM26.3734 2.652C27.0774 2.652 27.6254 2.868 28.0174 3.3C28.4174 3.724 28.6174 4.388 28.6174 5.292H24.3814L24.3694 5.064H27.4654C27.4814 4.672 27.4494 4.312 27.3694 3.984C27.2894 3.648 27.1614 3.38 26.9854 3.18C26.8174 2.98 26.5974 2.88 26.3254 2.88C25.9574 2.88 25.6294 3.064 25.3414 3.432C25.0614 3.8 24.8934 4.384 24.8374 5.184L24.8734 5.232C24.8574 5.352 24.8454 5.484 24.8374 5.628C24.8294 5.772 24.8254 5.916 24.8254 6.06C24.8254 6.604 24.9134 7.072 25.0894 7.464C25.2654 7.856 25.4934 8.156 25.7734 8.364C26.0614 8.564 26.3574 8.664 26.6614 8.664C27.0214 8.664 27.3534 8.576 27.6574 8.4C27.9614 8.224 28.2174 7.912 28.4254 7.464L28.6654 7.56C28.5774 7.824 28.4334 8.08 28.2334 8.328C28.0334 8.576 27.7814 8.78 27.4774 8.94C27.1734 9.092 26.8214 9.168 26.4214 9.168C25.8454 9.168 25.3494 9.036 24.9334 8.772C24.5254 8.508 24.2094 8.144 23.9854 7.68C23.7694 7.208 23.6614 6.668 23.6614 6.06C23.6614 5.356 23.7734 4.752 23.9974 4.248C24.2214 3.736 24.5374 3.344 24.9454 3.072C25.3534 2.792 25.8294 2.652 26.3734 2.652ZM38.5374 2.652C39.2414 2.652 39.7894 2.868 40.1814 3.3C40.5814 3.724 40.7814 4.388 40.7814 5.292H36.5454L36.5334 5.064H39.6294C39.6454 4.672 39.6134 4.312 39.5334 3.984C39.4534 3.648 39.3254 3.38 39.1494 3.18C38.9814 2.98 38.7614 2.88 38.4894 2.88C38.1214 2.88 37.7934 3.064 37.5054 3.432C37.2254 3.8 37.0574 4.384 37.0014 5.184L37.0374 5.232C37.0214 5.352 37.0094 5.484 37.0014 5.628C36.9934 5.772 36.9894 5.916 36.9894 6.06C36.9894 6.604 37.0774 7.072 37.2534 7.464C37.4294 7.856 37.6574 8.156 37.9374 8.364C38.2254 8.564 38.5214 8.664 38.8254 8.664C39.1854 8.664 39.5174 8.576 39.8214 8.4C40.1254 8.224 40.3814 7.912 40.5894 7.464L40.8294 7.56C40.7414 7.824 40.5974 8.08 40.3974 8.328C40.1974 8.576 39.9454 8.78 39.6414 8.94C39.3374 9.092 38.9854 9.168 38.5854 9.168C38.0094 9.168 37.5134 9.036 37.0974 8.772C36.6894 8.508 36.3734 8.144 36.1494 7.68C35.9334 7.208 35.8254 6.668 35.8254 6.06C35.8254 5.356 35.9374 4.752 36.1614 4.248C36.3854 3.736 36.7014 3.344 37.1094 3.072C37.5174 2.792 37.9934 2.652 38.5374 2.652ZM45.7238 2.652C46.0278 2.652 46.2798 2.692 46.4798 2.772C46.6878 2.852 46.8598 2.964 46.9958 3.108C47.1478 3.268 47.2558 3.468 47.3198 3.708C47.3838 3.948 47.4158 4.272 47.4158 4.68V7.884C47.4158 8.22 47.4838 8.448 47.6198 8.568C47.7638 8.688 47.9998 8.748 48.3278 8.748V9C48.1918 8.992 47.9838 8.984 47.7038 8.976C47.4238 8.96 47.1518 8.952 46.8878 8.952C46.6238 8.952 46.3638 8.96 46.1078 8.976C45.8598 8.984 45.6718 8.992 45.5438 9V8.748C45.8318 8.748 46.0358 8.688 46.1558 8.568C46.2758 8.448 46.3358 8.22 46.3358 7.884V4.416C46.3358 4.168 46.3158 3.94 46.2758 3.732C46.2358 3.524 46.1438 3.356 45.9998 3.228C45.8638 3.1 45.6518 3.036 45.3638 3.036C44.8598 3.036 44.4518 3.248 44.1398 3.672C43.8358 4.088 43.6838 4.604 43.6838 5.22V7.884C43.6838 8.22 43.7438 8.448 43.8638 8.568C43.9838 8.688 44.1878 8.748 44.4758 8.748V9C44.3478 8.992 44.1558 8.984 43.8998 8.976C43.6518 8.96 43.3958 8.952 43.1318 8.952C42.8678 8.952 42.5958 8.96 42.3158 8.976C42.0358 8.984 41.8278 8.992 41.6918 9V8.748C42.0198 8.748 42.2518 8.688 42.3878 8.568C42.5318 8.448 42.6038 8.22 42.6038 7.884V4.128C42.6038 3.768 42.5398 3.504 42.4118 3.336C42.2838 3.16 42.0438 3.072 41.6918 3.072V2.82C41.9478 2.844 42.1958 2.856 42.4358 2.856C42.6678 2.856 42.8878 2.844 43.0958 2.82C43.3118 2.788 43.5078 2.744 43.6838 2.688V4.104C43.8918 3.56 44.1798 3.184 44.5478 2.976C44.9238 2.76 45.3158 2.652 45.7238 2.652ZM50.7839 0.827999V2.832H52.5599V3.072H50.7839V7.716C50.7839 8.092 50.8519 8.356 50.9879 8.508C51.1239 8.66 51.3119 8.736 51.5519 8.736C51.7919 8.736 51.9999 8.64 52.1759 8.448C52.3519 8.248 52.5039 7.916 52.6319 7.452L52.8719 7.512C52.7919 7.976 52.6319 8.368 52.3919 8.688C52.1599 9.008 51.7999 9.168 51.3119 9.168C51.0399 9.168 50.8159 9.132 50.6399 9.06C50.4639 8.996 50.3079 8.9 50.1719 8.772C49.9959 8.588 49.8719 8.368 49.7999 8.112C49.7359 7.856 49.7039 7.516 49.7039 7.092V3.072H48.5519V2.832H49.7039V0.995999C49.9039 0.987999 50.0959 0.972 50.2799 0.948C50.4639 0.924 50.6319 0.884 50.7839 0.827999Z"
              fill="#34398A"
            />
            <path
              d="M35.2637 2.796V3.036C35.1117 3.076 34.9677 3.172 34.8317 3.324C34.6957 3.468 34.5637 3.716 34.4357 4.068L32.6837 9.024C32.5557 9.016 32.4237 9.012 32.2877 9.012C32.1597 9.012 32.0317 9.016 31.9037 9.024L29.7677 3.72C29.6397 3.408 29.5117 3.22 29.3837 3.156C29.2637 3.084 29.1597 3.048 29.0717 3.048V2.796C29.3277 2.812 29.5917 2.828 29.8637 2.844C30.1437 2.852 30.4477 2.856 30.7757 2.856C31.0237 2.856 31.2837 2.852 31.5557 2.844C31.8357 2.828 32.0957 2.812 32.3357 2.796V3.048C32.1677 3.048 32.0157 3.056 31.8797 3.072C31.7517 3.088 31.6637 3.14 31.6157 3.228C31.5677 3.316 31.5757 3.472 31.6397 3.696L33.0437 7.416L32.9237 7.584L33.8717 4.956C34.0957 4.308 34.1317 3.836 33.9797 3.54C33.8277 3.236 33.5637 3.068 33.1877 3.036V2.796C33.3717 2.804 33.5677 2.812 33.7757 2.82C33.9917 2.828 34.1797 2.832 34.3397 2.832C34.4997 2.832 34.6677 2.828 34.8437 2.82C35.0197 2.812 35.1597 2.804 35.2637 2.796Z"
              fill="#EF9B38"
            />
          </svg></h4>
          <div className="footer-footer-text-mobile">
            <p>Copyright@Lux Events</p>
            <p>Luv Events is An Event Management System</p>
          </div>
        </div>
      </div>

      <div className="footer-web d-none d-sm-block">
        <div className="card-deck mr-5 ml-5">
          <div className="card border-0">
            <div className="card-body ml-5 ">
              <ul className="footer-list footer-footer-text-web">
                <li className="font-weight-bold footer-web-left">
                  {" "}
                  <svg
                    width="53"
                    height="10"
                    viewBox="0 0 53 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.564 0.504V0.744C3.292 0.752 3.084 0.784 2.94 0.84C2.804 0.888 2.712 0.984 2.664 1.128C2.616 1.264 2.592 1.48 2.592 1.776V7.728C2.592 8.016 2.616 8.232 2.664 8.376C2.712 8.52 2.804 8.616 2.94 8.664C3.084 8.704 3.292 8.724 3.564 8.724H4.44C4.944 8.724 5.324 8.652 5.58 8.508C5.844 8.364 6.032 8.128 6.144 7.8C6.264 7.472 6.352 7.032 6.408 6.48H6.684C6.66 6.728 6.648 7.056 6.648 7.464C6.648 7.616 6.652 7.836 6.66 8.124C6.676 8.404 6.7 8.696 6.732 9C6.324 8.984 5.864 8.976 5.352 8.976C4.84 8.968 4.384 8.964 3.984 8.964C3.744 8.964 3.424 8.964 3.024 8.964C2.632 8.964 2.212 8.968 1.764 8.976C1.316 8.976 0.896 8.984 0.504 9V8.76C0.776 8.744 0.98 8.712 1.116 8.664C1.26 8.616 1.356 8.52 1.404 8.376C1.452 8.232 1.476 8.016 1.476 7.728V1.776C1.476 1.48 1.452 1.264 1.404 1.128C1.356 0.984 1.26 0.888 1.116 0.84C0.98 0.784 0.776 0.752 0.504 0.744V0.504C0.672 0.512 0.892 0.52 1.164 0.528C1.436 0.536 1.728 0.539999 2.04 0.539999C2.32 0.539999 2.596 0.536 2.868 0.528C3.148 0.52 3.38 0.512 3.564 0.504ZM12.8507 2.688V7.704C12.8507 8.064 12.9147 8.332 13.0427 8.508C13.1787 8.676 13.4187 8.76 13.7627 8.76V9.012C13.5147 8.988 13.2667 8.976 13.0187 8.976C12.7867 8.976 12.5627 8.988 12.3467 9.012C12.1387 9.036 11.9467 9.08 11.7707 9.144V7.728C11.5707 8.248 11.2867 8.62 10.9187 8.844C10.5587 9.06 10.1867 9.168 9.80269 9.168C9.52269 9.168 9.27869 9.128 9.07069 9.048C8.86269 8.968 8.69069 8.856 8.55469 8.712C8.40269 8.552 8.29869 8.344 8.24269 8.088C8.18669 7.832 8.15869 7.516 8.15869 7.14V4.128C8.15869 3.768 8.09469 3.504 7.96669 3.336C7.83869 3.16 7.59869 3.072 7.24669 3.072V2.82C7.50269 2.844 7.75069 2.856 7.99069 2.856C8.22269 2.856 8.44269 2.844 8.65069 2.82C8.86669 2.788 9.06269 2.744 9.23869 2.688V7.404C9.23869 7.652 9.25469 7.88 9.28669 8.088C9.31869 8.296 9.39869 8.464 9.52669 8.592C9.65469 8.72 9.86269 8.784 10.1507 8.784C10.6227 8.784 11.0107 8.576 11.3147 8.16C11.6187 7.736 11.7707 7.22 11.7707 6.612V4.128C11.7707 3.768 11.7067 3.504 11.5787 3.336C11.4507 3.16 11.2107 3.072 10.8587 3.072V2.82C11.1147 2.844 11.3627 2.856 11.6027 2.856C11.8347 2.856 12.0547 2.844 12.2627 2.82C12.4787 2.788 12.6747 2.744 12.8507 2.688ZM16.5713 2.82V3.072C16.4193 3.072 16.2913 3.108 16.1873 3.18C16.0833 3.252 16.0713 3.352 16.1513 3.48L19.3553 8.148C19.4913 8.348 19.6113 8.492 19.7153 8.58C19.8193 8.66 19.9473 8.716 20.0993 8.748V9C20.0193 8.992 19.8953 8.984 19.7273 8.976C19.5673 8.96 19.4073 8.952 19.2473 8.952C18.9993 8.952 18.7313 8.96 18.4433 8.976C18.1633 8.984 17.9593 8.992 17.8313 9V8.748C17.9913 8.748 18.1233 8.712 18.2273 8.64C18.3313 8.56 18.3393 8.46 18.2513 8.34L15.0473 3.672C14.8873 3.44 14.7593 3.288 14.6633 3.216C14.5673 3.136 14.4473 3.088 14.3033 3.072V2.82C14.3833 2.828 14.5073 2.84 14.6753 2.856C14.8433 2.864 15.0033 2.868 15.1553 2.868C15.4113 2.868 15.6793 2.864 15.9593 2.856C16.2393 2.84 16.4433 2.828 16.5713 2.82ZM16.8953 5.868C16.8953 5.868 16.9113 5.924 16.9433 6.036C16.9833 6.14 17.0033 6.192 17.0033 6.192L16.0073 7.488C15.7993 7.76 15.6873 7.988 15.6713 8.172C15.6633 8.356 15.7393 8.496 15.8993 8.592C16.0593 8.68 16.2793 8.736 16.5593 8.76V9C16.4233 8.992 16.2713 8.988 16.1033 8.988C15.9353 8.98 15.7713 8.976 15.6113 8.976C15.4593 8.968 15.3193 8.964 15.1913 8.964C14.8393 8.964 14.5353 8.976 14.2793 9V8.76C14.4313 8.744 14.5873 8.676 14.7473 8.556C14.9153 8.428 15.1113 8.216 15.3353 7.92L16.8953 5.868ZM19.8593 2.82V3.06C19.7073 3.076 19.5393 3.156 19.3553 3.3C19.1793 3.436 18.9953 3.636 18.8033 3.9L17.4233 5.808C17.4233 5.808 17.4073 5.756 17.3753 5.652C17.3433 5.548 17.3273 5.496 17.3273 5.496L18.2633 4.188C18.5273 3.812 18.6433 3.54 18.6113 3.372C18.5873 3.196 18.3633 3.092 17.9393 3.06V2.82C18.1473 2.828 18.3193 2.836 18.4553 2.844C18.5993 2.852 18.7633 2.856 18.9473 2.856C19.3073 2.856 19.6113 2.844 19.8593 2.82ZM26.3734 2.652C27.0774 2.652 27.6254 2.868 28.0174 3.3C28.4174 3.724 28.6174 4.388 28.6174 5.292H24.3814L24.3694 5.064H27.4654C27.4814 4.672 27.4494 4.312 27.3694 3.984C27.2894 3.648 27.1614 3.38 26.9854 3.18C26.8174 2.98 26.5974 2.88 26.3254 2.88C25.9574 2.88 25.6294 3.064 25.3414 3.432C25.0614 3.8 24.8934 4.384 24.8374 5.184L24.8734 5.232C24.8574 5.352 24.8454 5.484 24.8374 5.628C24.8294 5.772 24.8254 5.916 24.8254 6.06C24.8254 6.604 24.9134 7.072 25.0894 7.464C25.2654 7.856 25.4934 8.156 25.7734 8.364C26.0614 8.564 26.3574 8.664 26.6614 8.664C27.0214 8.664 27.3534 8.576 27.6574 8.4C27.9614 8.224 28.2174 7.912 28.4254 7.464L28.6654 7.56C28.5774 7.824 28.4334 8.08 28.2334 8.328C28.0334 8.576 27.7814 8.78 27.4774 8.94C27.1734 9.092 26.8214 9.168 26.4214 9.168C25.8454 9.168 25.3494 9.036 24.9334 8.772C24.5254 8.508 24.2094 8.144 23.9854 7.68C23.7694 7.208 23.6614 6.668 23.6614 6.06C23.6614 5.356 23.7734 4.752 23.9974 4.248C24.2214 3.736 24.5374 3.344 24.9454 3.072C25.3534 2.792 25.8294 2.652 26.3734 2.652ZM38.5374 2.652C39.2414 2.652 39.7894 2.868 40.1814 3.3C40.5814 3.724 40.7814 4.388 40.7814 5.292H36.5454L36.5334 5.064H39.6294C39.6454 4.672 39.6134 4.312 39.5334 3.984C39.4534 3.648 39.3254 3.38 39.1494 3.18C38.9814 2.98 38.7614 2.88 38.4894 2.88C38.1214 2.88 37.7934 3.064 37.5054 3.432C37.2254 3.8 37.0574 4.384 37.0014 5.184L37.0374 5.232C37.0214 5.352 37.0094 5.484 37.0014 5.628C36.9934 5.772 36.9894 5.916 36.9894 6.06C36.9894 6.604 37.0774 7.072 37.2534 7.464C37.4294 7.856 37.6574 8.156 37.9374 8.364C38.2254 8.564 38.5214 8.664 38.8254 8.664C39.1854 8.664 39.5174 8.576 39.8214 8.4C40.1254 8.224 40.3814 7.912 40.5894 7.464L40.8294 7.56C40.7414 7.824 40.5974 8.08 40.3974 8.328C40.1974 8.576 39.9454 8.78 39.6414 8.94C39.3374 9.092 38.9854 9.168 38.5854 9.168C38.0094 9.168 37.5134 9.036 37.0974 8.772C36.6894 8.508 36.3734 8.144 36.1494 7.68C35.9334 7.208 35.8254 6.668 35.8254 6.06C35.8254 5.356 35.9374 4.752 36.1614 4.248C36.3854 3.736 36.7014 3.344 37.1094 3.072C37.5174 2.792 37.9934 2.652 38.5374 2.652ZM45.7238 2.652C46.0278 2.652 46.2798 2.692 46.4798 2.772C46.6878 2.852 46.8598 2.964 46.9958 3.108C47.1478 3.268 47.2558 3.468 47.3198 3.708C47.3838 3.948 47.4158 4.272 47.4158 4.68V7.884C47.4158 8.22 47.4838 8.448 47.6198 8.568C47.7638 8.688 47.9998 8.748 48.3278 8.748V9C48.1918 8.992 47.9838 8.984 47.7038 8.976C47.4238 8.96 47.1518 8.952 46.8878 8.952C46.6238 8.952 46.3638 8.96 46.1078 8.976C45.8598 8.984 45.6718 8.992 45.5438 9V8.748C45.8318 8.748 46.0358 8.688 46.1558 8.568C46.2758 8.448 46.3358 8.22 46.3358 7.884V4.416C46.3358 4.168 46.3158 3.94 46.2758 3.732C46.2358 3.524 46.1438 3.356 45.9998 3.228C45.8638 3.1 45.6518 3.036 45.3638 3.036C44.8598 3.036 44.4518 3.248 44.1398 3.672C43.8358 4.088 43.6838 4.604 43.6838 5.22V7.884C43.6838 8.22 43.7438 8.448 43.8638 8.568C43.9838 8.688 44.1878 8.748 44.4758 8.748V9C44.3478 8.992 44.1558 8.984 43.8998 8.976C43.6518 8.96 43.3958 8.952 43.1318 8.952C42.8678 8.952 42.5958 8.96 42.3158 8.976C42.0358 8.984 41.8278 8.992 41.6918 9V8.748C42.0198 8.748 42.2518 8.688 42.3878 8.568C42.5318 8.448 42.6038 8.22 42.6038 7.884V4.128C42.6038 3.768 42.5398 3.504 42.4118 3.336C42.2838 3.16 42.0438 3.072 41.6918 3.072V2.82C41.9478 2.844 42.1958 2.856 42.4358 2.856C42.6678 2.856 42.8878 2.844 43.0958 2.82C43.3118 2.788 43.5078 2.744 43.6838 2.688V4.104C43.8918 3.56 44.1798 3.184 44.5478 2.976C44.9238 2.76 45.3158 2.652 45.7238 2.652ZM50.7839 0.827999V2.832H52.5599V3.072H50.7839V7.716C50.7839 8.092 50.8519 8.356 50.9879 8.508C51.1239 8.66 51.3119 8.736 51.5519 8.736C51.7919 8.736 51.9999 8.64 52.1759 8.448C52.3519 8.248 52.5039 7.916 52.6319 7.452L52.8719 7.512C52.7919 7.976 52.6319 8.368 52.3919 8.688C52.1599 9.008 51.7999 9.168 51.3119 9.168C51.0399 9.168 50.8159 9.132 50.6399 9.06C50.4639 8.996 50.3079 8.9 50.1719 8.772C49.9959 8.588 49.8719 8.368 49.7999 8.112C49.7359 7.856 49.7039 7.516 49.7039 7.092V3.072H48.5519V2.832H49.7039V0.995999C49.9039 0.987999 50.0959 0.972 50.2799 0.948C50.4639 0.924 50.6319 0.884 50.7839 0.827999Z"
                      fill="#34398A"
                    />
                    <path
                      d="M35.2637 2.796V3.036C35.1117 3.076 34.9677 3.172 34.8317 3.324C34.6957 3.468 34.5637 3.716 34.4357 4.068L32.6837 9.024C32.5557 9.016 32.4237 9.012 32.2877 9.012C32.1597 9.012 32.0317 9.016 31.9037 9.024L29.7677 3.72C29.6397 3.408 29.5117 3.22 29.3837 3.156C29.2637 3.084 29.1597 3.048 29.0717 3.048V2.796C29.3277 2.812 29.5917 2.828 29.8637 2.844C30.1437 2.852 30.4477 2.856 30.7757 2.856C31.0237 2.856 31.2837 2.852 31.5557 2.844C31.8357 2.828 32.0957 2.812 32.3357 2.796V3.048C32.1677 3.048 32.0157 3.056 31.8797 3.072C31.7517 3.088 31.6637 3.14 31.6157 3.228C31.5677 3.316 31.5757 3.472 31.6397 3.696L33.0437 7.416L32.9237 7.584L33.8717 4.956C34.0957 4.308 34.1317 3.836 33.9797 3.54C33.8277 3.236 33.5637 3.068 33.1877 3.036V2.796C33.3717 2.804 33.5677 2.812 33.7757 2.82C33.9917 2.828 34.1797 2.832 34.3397 2.832C34.4997 2.832 34.6677 2.828 34.8437 2.82C35.0197 2.812 35.1597 2.804 35.2637 2.796Z"
                      fill="#EF9B38"
                    />
                  </svg>
                </li>
                <li className="footer-web-left">Vendors</li>
              </ul>
            </div>
          </div>
          <div className="card border-0">
            <div className="card-body">
              <ul className="footer-list footer-footer-text-web">
                <li className="font-weight-bold footer-web-middle">
                  Find event
                </li>
                <li className="footer-web-middle">Create</li>
                <li className="footer-web-middle">Reserve</li>
                <li className="footer-web-middle">Book</li>
              </ul>
            </div>
          </div>
          <div className="card border-0 mr-5 ">
            <div className="card-body ">
              <ul className="footer-list footer-footer-text-web ">
                <li className="font-weight-bold footer-web-right">Terms &#38; condition</li>
                <li className="footer-web-right">Privacy policy</li>
                <li className="footer-web-right">Contact us</li>
                <li className="footer-web-right">FAQ</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container text-center mb-3">
          <div className="footer-footer-text-mobile">
            <p className="copyright">
              Copyright@Lux Events. Luv Events is An Event Management System
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
