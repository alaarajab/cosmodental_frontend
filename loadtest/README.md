# Load testing (Artillery)

## Run it

From the project folder (needs internet). The first run downloads Artillery, which can take a few minutes; after that it starts quickly:

```bash
npm run loadtest:smoke     # 1 minute, 5 visitors/second — quick check
npm run loadtest           # ~6.5 minutes, ramps up to 25 new visitors/second
npm run loadtest:report    # realistic test + saves full results to loadtest/results.json
```

Test a different address:

```bash
npx artillery@latest run -e realistic loadtest/artillery.yml --target https://cosmodental.alaayes.workers.dev
```

## What the realistic test does

| Phase | Length | New visitors per second |
|---|---|---|
| Warm up | 1 min | 5 |
| Ramp up | 2 min | 5 → 25 |
| Sustained peak | 3 min | 25 |
| Cool down | 30 s | 5 |

Each visitor loads 2–6 pages/files, so the peak is roughly **100–150 requests per second**,
about **5,000–6,000 visitors** in total. A busy dental clinic site gets a few hundred visitors a *day*.

The contact form is **never submitted** (it sends real emails through EmailJS).

## Reading the results

At the end, Artillery prints a summary. The important lines:

| Line | Meaning | Good value |
|---|---|---|
| `http.codes.200` | Successful responses | Almost all requests |
| `http.codes.403` / `429` / `503` | Blocked or overloaded | 0 (403/429 usually means Cloudflare's protection kicked in) |
| `http.response_time` → `p95` | 95% of requests were faster than this (ms) | Under 800 ms |
| `http.response_time` → `median` | Typical response time (ms) | Under 200 ms |
| `vusers.failed` | Visitors who hit an error | 0 |
| `errors.*` | Network errors / timeouts | None |

The **ensure** check at the bottom prints ✅ passed or ❌ failed for the thresholds
(p95 < 800 ms, p99 < 1500 ms, < 1% failed visitors).

Results also appear in **Cloudflare → cosmodental → Metrics** and in the domain's **Analytics**.
Load-test visits will inflate the visitor numbers for that day.

## Notes

- Your home internet connection can be the bottleneck at high rates. If response times look
  slow, run the smoke test first to compare.
- Don't push much beyond this level from one computer; Cloudflare may treat it as an attack and
  challenge or block your IP. For a heavier stress test, first allow your IP in Cloudflare
  (cosmodentalusa.com → Security → WAF → Tools → IP Access Rules → Allow).
