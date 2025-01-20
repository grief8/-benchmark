window.BENCHMARK_DATA = {
  "lastUpdate": 1737357419746,
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
      },
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
          "id": "fee9ccafc134186e61caeee176109794b4737ed8",
          "message": "ss",
          "timestamp": "2025-01-20T06:41:48Z",
          "url": "https://github.com/grief8/asterinas/commit/fee9ccafc134186e61caeee176109794b4737ed8"
        },
        "date": 1737357414499,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.339",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.612",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}