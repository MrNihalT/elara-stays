"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapScrollReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      // Only keep the hero parallax effect, skip heavy scroll reveal triggers
      gsap.to(".hero-float", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      return;
    }

    const items = gsap.utils.toArray<HTMLElement>(".gsap-reveal");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            once: true,
          },
        },
      );
    });

    const cardGroups = gsap.utils.toArray<HTMLElement>(".gsap-reveal");
    cardGroups.forEach((group) => {
      const cards = group.querySelectorAll(".resort-card, .review-card");
      if (!cards.length) return;

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 42, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: group,
            start: "top 72%",
            once: true,
          },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>(".image-reveal").forEach((imageWrap) => {
      const image = imageWrap.querySelector(".image-reveal-media");

      gsap.fromTo(
        imageWrap,
        {
          clipPath: "inset(18% 12% 18% 12% round 30px)",
          y: 24,
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageWrap,
            start: "top 84%",
            once: true,
          },
        },
      );

      if (image) {
        gsap.fromTo(
          image,
          { scale: 1.18, yPercent: 8 },
          {
            scale: 1,
            yPercent: 0,
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageWrap,
              start: "top 86%",
              once: true,
            },
          },
        );
      }
    });

    gsap.to(".hero-float", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
