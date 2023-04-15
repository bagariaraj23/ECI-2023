import React from "react";
import "./Card4.css";

const Card4 = () => {
  return (
    <div>
    <section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mx-auto">
                <header class="text-center pb-5">
                    <h1 class="h2">Collaborations</h1>
                    {/* <p>Build a nicely styled quote in Bootstrap 4.<br/>Bootstrap snippet by <a href="https://bootstrapious.com/snippets" class="font-italic text-info">Bootstrapious</a></p> */}
                </header>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 mx-auto">
                <blockquote class="blockquote bg-white p-5 shadow rounded">
                    <div class="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
                    <p class="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."</p>
                    {/* <footer class="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer> */}
                </blockquote>

            </div>
        </div>
    </div>
</section>

    </div>
  );
};

export default Card4;
