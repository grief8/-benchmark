window.BENCHMARK_DATA = {
  "lastUpdate": 1734938534906,
  "repoUrl": "https://github.com/grief8/asterinas",
  "entries": {
    "group8_smp1": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "d6a07c28c389660e91bf2d46852033ce257a2f7b",
          "message": "e",
          "timestamp": "2024-12-23T07:12:49Z",
          "url": "https://github.com/grief8/asterinas/commit/d6a07c28c389660e91bf2d46852033ce257a2f7b"
        },
        "date": 1734938529669,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.250",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.377",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}