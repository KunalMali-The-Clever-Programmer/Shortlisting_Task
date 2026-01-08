function solution(D) {
  const week = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const js = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  const arr = Array(7).fill(null);

  for (let k in D) {
    const day = js[new Date(k).getDay()];
    const i = week.indexOf(day);
    arr[i] = (arr[i] ?? 0) + D[k];
  }

  let i = 0;
  while (i < 7) {
    if (arr[i] !== null) { i++; continue; }

    let l = i - 1;
    while (l >= 0 && arr[l] === null) l--;

    let r = i + 1;
    while (r < 7 && arr[r] === null) r++;

    const A = arr[l];
    const B = arr[r];
    const gap = r - l;
    const step = Math.trunc((B - A) / gap);  

    for (let k = 1; k < gap; k++) {
      arr[l + k] = A + step * k;
    }

    i = r;
  }

  const out = {};
  for (let i = 0; i < 7; i++) out[week[i]] = arr[i];
  return out;
}

module.exports = solution;
