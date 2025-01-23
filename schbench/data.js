window.BENCHMARK_DATA = {
  "lastUpdate": 1737625409588,
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
          "id": "7030a99f9405c6fa96e8cce636e0bf24dd8c0b36",
          "message": "test",
          "timestamp": "2025-01-20T14:14:18Z",
          "url": "https://github.com/grief8/asterinas/commit/7030a99f9405c6fa96e8cce636e0bf24dd8c0b36"
        },
        "date": 1737385197106,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading the only CPU (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "165",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "235",
            "unit": "requests per second",
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
          "id": "7030a99f9405c6fa96e8cce636e0bf24dd8c0b36",
          "message": "test",
          "timestamp": "2025-01-20T14:14:18Z",
          "url": "https://github.com/grief8/asterinas/commit/7030a99f9405c6fa96e8cce636e0bf24dd8c0b36"
        },
        "date": 1737611257658,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading the only CPU (SMP=1)",
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
            "value": "238",
            "unit": "requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "p99_request_latency_smp1": [
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
        "date": 1734938559857,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading the only CPU",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "6456",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "5256",
            "unit": "µs",
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
          "id": "7030a99f9405c6fa96e8cce636e0bf24dd8c0b36",
          "message": "test",
          "timestamp": "2025-01-20T14:14:18Z",
          "url": "https://github.com/grief8/asterinas/commit/7030a99f9405c6fa96e8cce636e0bf24dd8c0b36"
        },
        "date": 1737385213797,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading the only CPU (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "6328",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "5128",
            "unit": "µs",
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
          "id": "7030a99f9405c6fa96e8cce636e0bf24dd8c0b36",
          "message": "test",
          "timestamp": "2025-01-20T14:14:18Z",
          "url": "https://github.com/grief8/asterinas/commit/7030a99f9405c6fa96e8cce636e0bf24dd8c0b36"
        },
        "date": 1737611273518,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading the only CPU (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "6680",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "5128",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "p99_wakeup_latency_smp1": [
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
        "date": 1734938575098,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading the only CPU",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "2",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1",
            "unit": "µs",
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
          "id": "7030a99f9405c6fa96e8cce636e0bf24dd8c0b36",
          "message": "test",
          "timestamp": "2025-01-20T14:14:18Z",
          "url": "https://github.com/grief8/asterinas/commit/7030a99f9405c6fa96e8cce636e0bf24dd8c0b36"
        },
        "date": 1737385234819,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading the only CPU (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "2",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1",
            "unit": "µs",
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
          "id": "7030a99f9405c6fa96e8cce636e0bf24dd8c0b36",
          "message": "test",
          "timestamp": "2025-01-20T14:14:18Z",
          "url": "https://github.com/grief8/asterinas/commit/7030a99f9405c6fa96e8cce636e0bf24dd8c0b36"
        },
        "date": 1737611292130,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading the only CPU (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "2",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "p50_rps_smp8": [
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
        "date": 1734938588941,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading the only CPU",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "306",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "49",
            "unit": "requests per second",
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
          "id": "7030a99f9405c6fa96e8cce636e0bf24dd8c0b36",
          "message": "test",
          "timestamp": "2025-01-20T14:14:18Z",
          "url": "https://github.com/grief8/asterinas/commit/7030a99f9405c6fa96e8cce636e0bf24dd8c0b36"
        },
        "date": 1737385254588,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading the only CPU (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "308",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "49",
            "unit": "requests per second",
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
          "id": "7030a99f9405c6fa96e8cce636e0bf24dd8c0b36",
          "message": "test",
          "timestamp": "2025-01-20T14:14:18Z",
          "url": "https://github.com/grief8/asterinas/commit/7030a99f9405c6fa96e8cce636e0bf24dd8c0b36"
        },
        "date": 1737611311014,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading the only CPU (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "305",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "51",
            "unit": "requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "p99_request_latency_smp8": [
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
        "date": 1734938604083,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading the only CPU",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "39232",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "352768",
            "unit": "µs",
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
          "id": "7030a99f9405c6fa96e8cce636e0bf24dd8c0b36",
          "message": "test",
          "timestamp": "2025-01-20T14:14:18Z",
          "url": "https://github.com/grief8/asterinas/commit/7030a99f9405c6fa96e8cce636e0bf24dd8c0b36"
        },
        "date": 1737385271194,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading the only CPU (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "38976",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "380416",
            "unit": "µs",
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
          "id": "7030a99f9405c6fa96e8cce636e0bf24dd8c0b36",
          "message": "test",
          "timestamp": "2025-01-20T14:14:18Z",
          "url": "https://github.com/grief8/asterinas/commit/7030a99f9405c6fa96e8cce636e0bf24dd8c0b36"
        },
        "date": 1737611326630,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading the only CPU (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "38720",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "384512",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "p99_wakeup_latency_smp8": [
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
        "date": 1734938619687,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading the only CPU",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "3956",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "292352",
            "unit": "µs",
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
          "id": "7030a99f9405c6fa96e8cce636e0bf24dd8c0b36",
          "message": "test",
          "timestamp": "2025-01-20T14:14:18Z",
          "url": "https://github.com/grief8/asterinas/commit/7030a99f9405c6fa96e8cce636e0bf24dd8c0b36"
        },
        "date": 1737385287912,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading the only CPU (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "3220",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "242944",
            "unit": "µs",
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
          "id": "7030a99f9405c6fa96e8cce636e0bf24dd8c0b36",
          "message": "test",
          "timestamp": "2025-01-20T14:14:18Z",
          "url": "https://github.com/grief8/asterinas/commit/7030a99f9405c6fa96e8cce636e0bf24dd8c0b36"
        },
        "date": 1737611343468,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading the only CPU (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "3268",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "244992",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "smp1_p50_rps": [
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
          "id": "542592a83596fbe75ee9facbb081aecaafc6beb3",
          "message": "test",
          "timestamp": "2025-01-23T09:00:53Z",
          "url": "https://github.com/grief8/asterinas/commit/542592a83596fbe75ee9facbb081aecaafc6beb3"
        },
        "date": 1737625368717,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading the only CPU (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "160",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "235",
            "unit": "requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "smp1_p99_request_latency": [
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
          "id": "542592a83596fbe75ee9facbb081aecaafc6beb3",
          "message": "test",
          "timestamp": "2025-01-23T09:00:53Z",
          "url": "https://github.com/grief8/asterinas/commit/542592a83596fbe75ee9facbb081aecaafc6beb3"
        },
        "date": 1737625386991,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading the only CPU (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "6568",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "5176",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "smp1_p99_wakeup_latency": [
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
          "id": "542592a83596fbe75ee9facbb081aecaafc6beb3",
          "message": "test",
          "timestamp": "2025-01-23T09:00:53Z",
          "url": "https://github.com/grief8/asterinas/commit/542592a83596fbe75ee9facbb081aecaafc6beb3"
        },
        "date": 1737625404140,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading the only CPU (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "3",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}