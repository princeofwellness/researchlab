# Founder Profile Fixes: Roman LinkedIn + PÁKA→VYUŽITIE + SK Company Name

## TL;DR

> **Quick Summary**: Three founder profile fixes across both repos: add Roman's LinkedIn URL everywhere, finish PÁKA→VYUŽITIE rename, and translate Roman's company name to Slovak in SK sections. Then commit and push both repos.
> 
> **Deliverables**:
> - Roman's LinkedIn (`https://www.linkedin.com/in/romanpiiwagner/?originalSubdomain=sk`) added to all 12 profile instances
> - PÁKA→VYUŽITIE fixed in 2 remaining research-edu locations + existing research-lab fix committed
> - `company: "Transformational Design"` → `company: "Transformačný dizajnér"` in all 6 SK sections
> - Both repos committed and pushed to production
> 
> **Estimated Effort**: Quick
> **Parallel Execution**: YES — 2 waves (repo edits in parallel, then commit/push)
> **Critical Path**: Fix files → Commit & push

---

## Context

### Original Request
1. Add Roman's LinkedIn URL to all his founder profiles (both repos, all pages including onepagers)
2. PÁKA→VYUŽITIE was partially done — research-lab corporate.vue fixed locally but never committed; research-edu still has PÁKA in 2 files
3. Roman's `company` field says "Transformational Design" in SK sections — should be "Transformačný dizajnér"

### Current State

**PÁKA→VYUŽITIE:**
- research-lab `corporate.vue:203` — ✅ fixed locally, **uncommitted**
- research-edu `corporate/page.tsx:205` — ❌ still says PÁKA
- research-edu `corporate/onepager/page.tsx:132` — ❌ still says PÁKA

**Roman `url` field** — `""` in all 12 locations across both repos.

**Roman `company` in SK sections** — says "Transformational Design" (English) in 6 SK locations, should be "Transformačný dizajnér".

---

## Work Objectives

### Core Objective
Fix all three founder profile issues and push to production in both repos.

### Must Have
- URL exactly: `https://www.linkedin.com/in/romanpiiwagner/?originalSubdomain=sk`
- PÁKA replaced with VYUŽITIE (all-caps)
- SK company: `"Transformačný dizajnér"` (lowercase d — matching the bio text pattern already in use)
- EN company stays `"Transformational Design"` — do NOT change EN sections
- Changes pushed to production (both repos)

### Must NOT Have
- Do NOT change Roland's or Ján's data
- Do NOT modify EN sections for company name
- Do NOT touch archive/ or page.backup.tsx files

---

## TODOs

- [ ] 1. Fix research-edu: all three changes (8 files, ~14 edits)

  **What to do**:

  **A) PÁKA→VYUŽITIE** (2 edits):
  - `src/app/corporate/page.tsx` line 205: `role: "PÁKA"` → `role: "VYUŽITIE"`
  - `src/app/corporate/onepager/page.tsx` line 132: `role: "PÁKA"` → `role: "VYUŽITIE"` (inline object)

  **B) Roman LinkedIn URL** (8 edits — `url: ""` → `url: "https://www.linkedin.com/in/romanpiiwagner/?originalSubdomain=sk"`):
  - `src/app/public/page.tsx` line 121 (EN)
  - `src/app/public/page.tsx` line 260 (SK)
  - `src/app/corporate/page.tsx` line 97 (EN)
  - `src/app/corporate/page.tsx` line 218 (SK)
  - `src/app/public/onepager/page.tsx` line 63 (EN, inline object)
  - `src/app/public/onepager/page.tsx` line 136 (SK, inline object)
  - `src/app/corporate/onepager/page.tsx` line 54 (EN, inline object)
  - `src/app/corporate/onepager/page.tsx` line 133 (SK, inline object — same line that has PÁKA fix above)

  **C) SK company name** (4 edits — `company: "Transformational Design"` → `company: "Transformačný dizajnér"` in SK sections ONLY):
  - `src/app/public/page.tsx` line 257 (SK Roman profile)
  - `src/app/corporate/page.tsx` line 215 (SK Roman profile)
  - `src/app/public/onepager/page.tsx` line 136 (SK, inline — same line as LinkedIn URL edit)
  - `src/app/corporate/onepager/page.tsx` line 133 (SK, inline — same line as PÁKA + URL edits)

  **IMPORTANT for onepager inline edits**: Lines 136 (public onepager) and 133 (corporate onepager) have MULTIPLE changes on the SAME line. For inline objects, do all changes to that line in a single edit. For corporate onepager line 132-133, line 132 is Ján (PÁKA fix) and line 133 is Roman (URL + company).

  **Must NOT do**:
  - Do not change EN `company` values (lines 118, 94, 63, 54 keep "Transformational Design")
  - Do not touch Roland's or Ján's URLs
  - Do not edit archive/ or backup files

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Task 2)
  - **Parallel Group**: Wave 1
  - **Blocks**: Task 3
  - **Blocked By**: None

  **References**:
  - `src/app/public/page.tsx:115-123` — Roman EN profile (url at 121, company at 118 — EN, don't change company)
  - `src/app/public/page.tsx:254-262` — Roman SK profile (url at 260, company at 257 — change company)
  - `src/app/corporate/page.tsx:91-99` — Roman EN profile (url at 97, company at 94 — EN, don't change company)
  - `src/app/corporate/page.tsx:212-220` — Roman SK profile (url at 218, company at 215 — change company)
  - `src/app/corporate/page.tsx:205` — Ján SK role "PÁKA"
  - `src/app/public/onepager/page.tsx:63` — Roman EN inline (url change only)
  - `src/app/public/onepager/page.tsx:136` — Roman SK inline (url + company change)
  - `src/app/corporate/onepager/page.tsx:54` — Roman EN inline (url change only)
  - `src/app/corporate/onepager/page.tsx:132` — Ján SK inline (PÁKA→VYUŽITIE)
  - `src/app/corporate/onepager/page.tsx:133` — Roman SK inline (url + company change)

  **Acceptance Criteria**:
  - [ ] `grep -c 'PÁKA' src/app/corporate/page.tsx src/app/corporate/onepager/page.tsx` → 0
  - [ ] `grep -c 'VYUŽITIE' src/app/corporate/page.tsx` → 1
  - [ ] `grep -c 'VYUŽITIE' src/app/corporate/onepager/page.tsx` → 1
  - [ ] `grep -c 'romanpiiwagner' src/app/public/page.tsx` → 2
  - [ ] `grep -c 'romanpiiwagner' src/app/corporate/page.tsx` → 2
  - [ ] `grep -c 'romanpiiwagner' src/app/public/onepager/page.tsx` → 2
  - [ ] `grep -c 'romanpiiwagner' src/app/corporate/onepager/page.tsx` → 2
  - [ ] `grep 'Transformačný dizajnér' src/app/public/page.tsx` → 1 match (SK section only)
  - [ ] `grep 'Transformačný dizajnér' src/app/corporate/page.tsx` → 1 match (SK section only)
  - [ ] `grep 'Transformačný dizajnér' src/app/public/onepager/page.tsx` → 1 match (SK section only)
  - [ ] `grep 'Transformačný dizajnér' src/app/corporate/onepager/page.tsx` → 1 match (SK section only)
  - [ ] EN sections still say `company: "Transformational Design"` (4 EN locations unchanged)

  **Commit**: YES (with Task 3)
  - Message: `content(founders): add Roman LinkedIn, fix PÁKA→VYUŽITIE, translate SK company name`
  - Files: `src/app/public/page.tsx`, `src/app/corporate/page.tsx`, `src/app/public/onepager/page.tsx`, `src/app/corporate/onepager/page.tsx`

---

- [ ] 2. Fix research-lab: Roman LinkedIn URL + SK company name (2 files, ~6 edits)

  **What to do**:

  **A) Roman LinkedIn URL** (4 edits — `url: ""` → `url: "https://www.linkedin.com/in/romanpiiwagner/?originalSubdomain=sk"`):
  - `pages/mindshift/public.vue` line 122 (EN)
  - `pages/mindshift/public.vue` line 261 (SK)
  - `pages/corporate.vue` line 95 (EN)
  - `pages/corporate.vue` line 216 (SK)

  **B) SK company name** (2 edits — `company: "Transformational Design"` → `company: "Transformačný dizajnér"` in SK only):
  - `pages/mindshift/public.vue` line 258 (SK Roman profile)
  - `pages/corporate.vue` line 213 (SK Roman profile)

  **Already done locally (just needs committing with above)**:
  - `pages/corporate.vue` line 203: PÁKA→VYUŽITIE (already in working tree)

  **Must NOT do**:
  - Do not change EN `company` values (lines 119, 92 stay "Transformational Design")
  - Do not revert the existing PÁKA→VYUŽITIE change

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Task 1)
  - **Parallel Group**: Wave 1
  - **Blocks**: Task 3
  - **Blocked By**: None

  **References**:
  - `pages/mindshift/public.vue:116-124` — Roman EN profile (url at 122, company at 119 — EN, don't change)
  - `pages/mindshift/public.vue:255-263` — Roman SK profile (url at 261, company at 258 — change company)
  - `pages/corporate.vue:89-97` — Roman EN profile (url at 95, company at 92 — EN, don't change)
  - `pages/corporate.vue:210-218` — Roman SK profile (url at 216, company at 213 — change company)
  - Existing uncommitted diff: `corporate.vue` line 203 PÁKA→VYUŽITIE

  **Acceptance Criteria**:
  - [ ] `grep -c 'PÁKA' pages/corporate.vue pages/mindshift/public.vue` → 0
  - [ ] `grep -c 'romanpiiwagner' pages/mindshift/public.vue` → 2
  - [ ] `grep -c 'romanpiiwagner' pages/corporate.vue` → 2
  - [ ] `grep 'Transformačný dizajnér' pages/mindshift/public.vue` → 1 match (SK only)
  - [ ] `grep 'Transformačný dizajnér' pages/corporate.vue` → 1 match (SK only)
  - [ ] EN sections still say `company: "Transformational Design"` (2 EN locations unchanged)

  **Commit**: YES (with Task 3)
  - Message: `content(founders): add Roman LinkedIn, fix PÁKA→VYUŽITIE, translate SK company name`
  - Files: `pages/mindshift/public.vue`, `pages/corporate.vue`

---

- [ ] 3. Commit and push both repos to production

  **What to do**:

  **research-edu** (working directory: `/Users/princeofwellness/Desktop/research-edu`):
  ```bash
  git add src/app/public/page.tsx src/app/corporate/page.tsx src/app/public/onepager/page.tsx src/app/corporate/onepager/page.tsx
  git commit -m "content(founders): add Roman LinkedIn, fix PÁKA→VYUŽITIE, translate SK company name"
  git push
  ```

  **research-lab** (working directory: `/Users/princeofwellness/Desktop/research-lab`):
  ```bash
  git add pages/corporate.vue pages/mindshift/public.vue
  git commit -m "content(founders): add Roman LinkedIn, fix PÁKA→VYUŽITIE, translate SK company name"
  git push origin master:main
  ```
  Note: research-lab uses `git push origin master:main` (local `master` → remote `main`).

  **Must NOT do**:
  - Do not force push
  - Do not push any unrelated changes

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`git-master`]

  **Parallelization**:
  - **Can Run In Parallel**: NO (sequential after Tasks 1+2)
  - **Parallel Group**: Wave 2
  - **Blocks**: None (final)
  - **Blocked By**: Tasks 1, 2

  **Acceptance Criteria**:
  - [ ] `git -C /Users/princeofwellness/Desktop/research-edu status` → clean
  - [ ] `git -C /Users/princeofwellness/Desktop/research-lab status` → clean
  - [ ] Both repos "up to date with origin"

  **Commit**: N/A (this IS the commit task)

---

## Commit Strategy

| After Task | Repo | Message | Files | Push Command |
|------------|------|---------|-------|--------------|
| 1+3 | research-edu | `content(founders): add Roman LinkedIn, fix PÁKA→VYUŽITIE, translate SK company name` | 4 files | `git push` |
| 2+3 | research-lab | `content(founders): add Roman LinkedIn, fix PÁKA→VYUŽITIE, translate SK company name` | 2 files | `git push origin master:main` |

---

## Success Criteria

### Verification Commands
```bash
# Zero PÁKA remaining
grep -r "PÁKA" /Users/princeofwellness/Desktop/research-edu/src/app/corporate/ /Users/princeofwellness/Desktop/research-edu/src/app/public/  # Expected: no output
grep -r "PÁKA" /Users/princeofwellness/Desktop/research-lab/pages/  # Expected: no output

# Roman LinkedIn in all 12 locations
grep -rc "romanpiiwagner" /Users/princeofwellness/Desktop/research-edu/src/app/public/page.tsx /Users/princeofwellness/Desktop/research-edu/src/app/corporate/page.tsx /Users/princeofwellness/Desktop/research-edu/src/app/public/onepager/page.tsx /Users/princeofwellness/Desktop/research-edu/src/app/corporate/onepager/page.tsx /Users/princeofwellness/Desktop/research-lab/pages/mindshift/public.vue /Users/princeofwellness/Desktop/research-lab/pages/corporate.vue  # Expected: 2 per file

# SK company name translated (6 SK locations)
grep -rc "Transformačný dizajnér" /Users/princeofwellness/Desktop/research-edu/src/app/public/page.tsx /Users/princeofwellness/Desktop/research-edu/src/app/corporate/page.tsx /Users/princeofwellness/Desktop/research-edu/src/app/public/onepager/page.tsx /Users/princeofwellness/Desktop/research-edu/src/app/corporate/onepager/page.tsx /Users/princeofwellness/Desktop/research-lab/pages/mindshift/public.vue /Users/princeofwellness/Desktop/research-lab/pages/corporate.vue  # Expected: 1 per file (SK section only)

# EN company name untouched (6 EN locations)
grep -c "Transformational Design" /Users/princeofwellness/Desktop/research-edu/src/app/public/page.tsx  # Expected: 1 (EN section)
grep -c "Transformational Design" /Users/princeofwellness/Desktop/research-edu/src/app/corporate/page.tsx  # Expected: 1 (EN section)

# Both repos clean and pushed
git -C /Users/princeofwellness/Desktop/research-edu status  # Expected: clean
git -C /Users/princeofwellness/Desktop/research-lab status  # Expected: clean
```

### Final Checklist
- [ ] Roman LinkedIn URL in all 12 profile locations
- [ ] Zero instances of PÁKA in either repo (corporate pages + onepagers)
- [ ] VYUŽITIE in Ján's SK corporate role (both repos)
- [ ] SK company = "Transformačný dizajnér" in all 6 SK sections
- [ ] EN company = "Transformational Design" unchanged in all 6 EN sections
- [ ] Both repos committed and pushed to production
- [ ] No other founder data modified
