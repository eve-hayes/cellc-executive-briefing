# Cell C Executive Briefing Microsite

A private, strategic founder-to-CEO briefing microsite designed specifically for **Jorge Mendes (CEO)**, **El Kope (CFO)**, and the **Cell C Executive Committee**, created by **Achievement Awards Group (AAGroup)**.

---

## 🎯 Executive Purpose

Unlike traditional vendor landing pages that dump software features and product catalogs, this microsite is built to **create a knowledge gap, not close it**:
1. **Acknowledge the Strategic Victory:** Respectfully celebrate Cell C's successful operational turnaround—transitioning from expensive network capex into an agile, capex-light model anchored by national roaming agreements and wholesale MVNO scale.
2. **Expose the Asymmetric Friction Point:** Cell C solved its network and balance sheet challenge, but customer acquisition and churn defence are won or lost by the human at the retail and partner terminal (e.g. at Capitec, Shoprite, FNB).
3. **Provoke Peer-to-Peer Dialogue:** Center the site on **4 direct CEO questions** that demand executive-level diagnostic discussion.
4. **Drive a Singular Outcome:** Secure a confidential **45-minute Founder-to-CEO discussion** between Geoffrey A. Amyot (Founder, AAGroup) and Jorge Mendes.

---

## 📂 Project Structure

```text
├── index.html            # Production-ready, standalone executive microsite
├── package.json          # Project configuration & local preview script
├── README.md             # Project documentation & strategic guide
├── cellc/                # Standalone distribution folder (ready for web server upload)
│   └── index.html
├── reference/            # Archived original templates and reference styles
│   ├── scratch_motus.html
│   ├── scratch_motus_text.txt
│   └── scratch_aagroup_style.css
└── _portfolio_backup/    # Safely archived previous portfolio files
```

---

## 🚀 How to Preview & Deploy

### Quick Local Preview (Zero Build Required)
Double-click `index.html` in your file explorer to open it immediately in any web browser.

### Local Development Server
```bash
npm run dev
# Opens lightweight local server at http://localhost:3000
```

### Production Deployment to `aagroup.co.za/lp/cellc/`
Upload `index.html` directly to the `/lp/cellc/` directory on the AAGroup web server. The page is self-contained with zero external framework dependencies, ensuring maximum speed, security, and rendering reliability.

---

## 🔑 Key Stakeholders & Contacts

- **Target Audience:**
  - **Jorge Mendes** — Chief Executive Officer, Cell C
  - **El Kope** — Chief Financial Officer, Cell C
  - **Cell C Executive Committee (Exco)**
- **Achievement Awards Group Leadership:**
  - **Geoffrey A. Amyot** — Founder & Executive Chairman
  - **Dane Amyot** — Chief Executive Officer
  - **Andrew Solomon** — Head of Strategic Engagements & Client Growth (`andrews@awards.co.za`)
  - **Dr. Preeya Daya** — Lead: Research, Diagnostics & Behavioral Science
  - **Jean Claude (JC) Latter** — Lead: Channel Incentive Architectures
