export default function HeroDecorations() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* Large organic brush/blob */}
      <svg
        className="
            absolute
            -right-32
            top-16
            h-[300px]
            w-[300px]
            opacity-10
            lg:-right-32
            lg:top-10
            lg:h-[650px]
            lg:w-[650px]
            lg:opacity-15
            "
        viewBox="0 0 600 600"
        fill="none"
      >
        <path
          d="
            M470 90
            C560 170 570 330 470 440
            C370 550 190 560 90 450
            C-10 340 30 170 150 80
            C260 0 380 10 470 90Z
          "
          fill="var(--theme-primary)"
        />
      </svg>

      {/* Decorative curved line */}
      <svg
        className="
          absolute
          -left-20
          top-24
          h-[300px]
          w-[300px]
          opacity-40
          lg:h-[450px]
          lg:w-[450px]
        "
        viewBox="0 0 450 450"
        fill="none"
      >
        <path
          d="
            M-20 330
            C80 220 110 320 190 230
            C260 150 270 100 470 20
          "
          stroke="var(--theme-primary)"
          strokeWidth="2"
        />

        <path
          d="
            M-20 360
            C90 250 130 350 210 260
            C280 180 310 120 470 50
          "
          stroke="var(--theme-primary)"
          strokeWidth="1"
        />
      </svg>

      {/* Flower / leaf decoration */}
      <svg
        className="
          absolute
          bottom-0
          left-[5%]
          hidden
          h-40
          w-40
          opacity-30
          lg:block
        "
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 180C100 120 100 80 100 20"
          stroke="var(--theme-primary)"
          strokeWidth="2"
        />

        <path
          d="
            M100 130
            C70 125 45 105 35 75
            C70 75 95 90 100 130Z
          "
          stroke="var(--theme-primary)"
          strokeWidth="2"
        />

        <path
          d="
            M100 105
            C130 100 155 80 165 50
            C130 50 105 65 100 105Z
          "
          stroke="var(--theme-primary)"
          strokeWidth="2"
        />

        <path
          d="
            M100 75
            C75 70 55 50 50 25
            C80 30 95 45 100 75Z
          "
          stroke="var(--theme-primary)"
          strokeWidth="2"
        />
      </svg>

      {/* Sparkle */}
      <svg
        className="
          absolute
          right-[42%]
          top-[15%]
          h-8
          w-8
          opacity-60
        "
        viewBox="0 0 40 40"
      >
        <path
          d="
            M20 0
            C22 12 28 18 40 20
            C28 22 22 28 20 40
            C18 28 12 22 0 20
            C12 18 18 12 20 0Z
          "
          fill="var(--theme-primary)"
        />
      </svg>

      {/* Small sparkle */}
      <svg
        className="
          absolute
          bottom-[25%]
          right-[8%]
          h-5
          w-5
          opacity-40
        "
        viewBox="0 0 40 40"
      >
        <path
          d="
            M20 0
            C22 12 28 18 40 20
            C28 22 22 28 20 40
            C18 28 12 22 0 20
            C12 18 18 12 20 0Z
          "
          fill="var(--theme-primary)"
        />
      </svg>
    </div>
  );
}