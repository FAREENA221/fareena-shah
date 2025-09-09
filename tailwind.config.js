module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'frozen-light-blue': '#a8dff4',
        'frozen-blue': '#74d4ea',
        'frozen-dark-blue': '#0077c2',
        'frozen-purple': '#8768a4',
        'frozen-silver': '#e2e8f0',
        'frozen-white': '#ffffff',
        'frozen-dark-text': '#2d3748',
      },
      backgroundImage: {
        'frozen-gradient': 'linear-gradient(135deg, #a8dff4 0%, #74d4ea 100%)',
        'frozen-hero': `linear-gradient(rgba(45, 55, 72, 0.4), rgba(26, 32, 44, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4FKI21wzEZKBgR4lgRxxf_xoJ50fF_Wvo9Szp6t2ULZ2YUYDMDSFPfdTK2h9kTUR8m7LNos4hH9tun18ykqomUaI-eJieRB0V-dn72NYiMvw4bPkKU0Xb_dO12FcFJqgWj_v830Bd3-WJ69lkVU4HmJapxmPhVO9uFYEMTADHqBw78oaezWCaGlVx2EeG2I_O5IKvbEmslKle_lILFnn9Qg6pQAzyBZjS5GL8Yc_s6kaSrl-lRpM1s8GabeqkmSzDP7zGn-B5lNzG")`,
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
