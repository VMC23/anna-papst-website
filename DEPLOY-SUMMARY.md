# Deploy-Protokoll – ichau.net
**Datum:** 29. Juni 2026

---

## Ausgangslage
Die Website ichau.net ist ein Vue 3 / Vite Projekt. Ziel war es, die Seite live auf GitHub Pages unter der Domain ichau.net bereitzustellen.

---

## Durchgeführte Schritte

### 1. Vue/Vite Projekt gebaut
- Befehl: `npm run build` im Verzeichnis `v1_Website/site/`
- Ergebnis: Vite hat folgende Dateien in `dist/` erzeugt:
  - `index.html` (Einstiegsseite)
  - `assets/index-CfX07mmu.css` (Stylesheet)
  - `assets/index-Dld_Ckp7.js` (JavaScript-Bundle)

### 2. Build-Dateien ins Repository-Root kopiert
- `dist/assets/` → `assets/` (im Repo-Root)
- `dist/index.html` → `index.html` (im Repo-Root)
- Damit kann GitHub Pages die Dateien direkt ausliefern

### 3. .gitignore aktualisiert
- `.vite/` hinzugefügt (Build-Cache, soll nicht ins Repo)
- `node_modules/` und `dist/` bleiben weiterhin ignoriert
- Die kopierten `assets/` und `index.html` im Root werden getrackt

### 4. DNS geprüft (Infomaniak)
- Über die Infomaniak-API geprüft: Die 4 A-Records für GitHub Pages waren bereits vorhanden:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- `www.ichau.net` hat einen CNAME auf `vmc23.github.io`
- Problem: Lokaler DNS-Cache hatte einen negativen Eintrag (NXDOMAIN), deshalb war die Seite lokal nicht erreichbar → Lösung: DNS-Cache leeren (`sudo dscacheutil -flushcache`)

### 5. GitHub Pages Deploy repariert
- **Problem:** GitHub Pages war auf `build_type: workflow` konfiguriert, aber die Workflow-Datei existierte nicht mehr (wurde in einem früheren Commit revertiert)
- **Lösung:** Über die GitHub-API auf `build_type: legacy` umgestellt (Deploy direkt vom `main`-Branch)
- `.nojekyll`-Datei hinzugefügt, damit Jekyll die Vue-Build-Dateien nicht verarbeitet (das hatte "Site not found"-Fehler verursacht)

### 6. Commits & Push
| Commit | Beschreibung |
|--------|-------------|
| `d4733a0` | Build and deploy Vue app for Infomaniak static hosting |
| `32961d1` | Trigger GitHub Pages deploy (leerer Commit) |
| `8901ff7` | Add .nojekyll to prevent Jekyll processing |

---

## Aktuelle Architektur
| Komponente | Details |
|-----------|---------|
| **Hosting** | GitHub Pages (Legacy-Modus, vom `main`-Branch) |
| **Repository** | github.com/VMC23/anna-papst-website |
| **Domain** | ichau.net (DNS bei Infomaniak) |
| **SSL/HTTPS** | GitHub Pages Zertifikat, HTTPS erzwungen |
| **Framework** | Vue 3 + Vite |
| **Lokale Entwicklung** | `npm run dev` in `v1_Website/site/` |

## Erneut deployen
1. `cd v1_Website/site/`
2. `npm run build`
3. `cp -r dist/assets . && cp dist/index.html .`
4. `git add assets/ index.html && git commit -m "Update build" && git push`
