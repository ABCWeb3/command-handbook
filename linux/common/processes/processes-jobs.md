# العمليات والمهام في Linux

## عرض العمليات

```bash
ps aux
```

```bash
pgrep -a process-name
```

## العرض التفاعلي

```bash
top
```

## إنهاء عملية بشكل عادي

```bash
kill PID
```

استخدم `kill -9` فقط بعد فشل الإنهاء العادي.

## المهام في الصدفة

```bash
jobs -l
```

```bash
command-name &
```

```bash
fg %1
```

```bash
bg %1
```

## أولوية العملية

```bash
nice -n 10 command-name
```

```bash
sudo renice 10 -p PID
```
