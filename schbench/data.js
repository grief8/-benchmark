window.BENCHMARK_DATA = {
  "lastUpdate": 1734938550309,
  "repoUrl": "https://github.com/grief8/asterinas",
  "entries": {
    "p50_rps_smp1": [
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
        "date": 1734938545186,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading the only CPU",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "159",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "211",
            "unit": "requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}