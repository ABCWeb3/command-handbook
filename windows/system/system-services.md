# إدارة النظام والخدمات في Windows

## معلومات النظام

```powershell
Get-CimInstance Win32_OperatingSystem | Select-Object Caption, Version, OSArchitecture, LastBootUpTime
```

## أكثر العمليات استهلاكاً للذاكرة

```powershell
Get-Process | Sort-Object WorkingSet -Descending | Select-Object -First 10
```

## الخدمات

```powershell
Get-Service
```

```powershell
Get-Service -Name "Spooler"
```

```powershell
Restart-Service -Name "Spooler" -Confirm
```

> [!WARNING]
> إعادة تشغيل خدمة قد تعطل وظيفة مرتبطة بها. تحقق من الاسم والتأثير أولاً.

## سجل أحداث النظام والأخطاء

```powershell
Get-WinEvent -LogName System -MaxEvents 50
```

```powershell
Get-WinEvent -FilterHashtable @{LogName='System'; Level=2} -MaxEvents 20
```

## التطبيقات والتحديثات عبر winget

```powershell
winget list
```

```powershell
winget upgrade
```
