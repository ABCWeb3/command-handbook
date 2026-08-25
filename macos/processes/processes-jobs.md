# العمليات والمهام في macOS

## عرض العمليات والبحث

```bash
ps aux
```

```bash
pgrep -fl process-name
```

## العرض التفاعلي

```bash
top
```

## إنهاء عملية

```bash
kill PID
```

## مهام الصدفة

```bash
jobs -l
```

```bash
command-name &
```

```bash
fg %1
```

## منع توقف أمر عند إغلاق Terminal

```bash
nohup command-name > command.log 2>&1 &
```
