window.BENCHMARK_DATA = {
  "lastUpdate": 1732264146017,
  "repoUrl": "https://github.com/grief8/asterinas",
  "entries": {
    "cpu_lat": [
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
          "id": "d7cec815f2b239f7a33ae992a00a11c6b64f3d96",
          "message": "ss",
          "timestamp": "2024-11-22T07:41:31Z",
          "url": "https://github.com/grief8/asterinas/commit/d7cec815f2b239f7a33ae992a00a11c6b64f3d96"
        },
        "date": 1732264120528,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "2.83",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "2.87",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "thread_lat": [
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
          "id": "d7cec815f2b239f7a33ae992a00a11c6b64f3d96",
          "message": "ss",
          "timestamp": "2024-11-22T07:41:31Z",
          "url": "https://github.com/grief8/asterinas/commit/d7cec815f2b239f7a33ae992a00a11c6b64f3d96"
        },
        "date": 1732264139889,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "15.62",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "16.81",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}