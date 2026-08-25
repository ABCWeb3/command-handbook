# إدارة النظام والخدمات في macOS

## معلومات النظام

```bash
system_profiler SPSoftwareDataType SPHardwareDataType
```

## وقت التشغيل والذاكرة

```bash
uptime
```

```bash
vm_stat
```

## العمليات الأكثر استهلاكاً للذاكرة

```bash
ps aux | sort -nrk 4 | head
```

## خدمات launchd

```bash
launchctl list
```

```bash
launchctl list | grep -i "service-name"
```

## سجلات النظام

```bash
log show --last 1h --style compact
```

```bash
log stream --style compact
```

اخرج من المتابعة بواسطة `Ctrl+C`.

## تحديثات النظام وHomebrew

```bash
softwareupdate --list
```

```bash
brew outdated
```
