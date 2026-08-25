# العمليات والمهام في Windows

## عرض العمليات والبحث

```powershell
Get-Process
```

```powershell
Get-Process -Name "notepad"
```

## تشغيل عملية

```powershell
Start-Process "notepad.exe"
```

## إيقاف مع التأكيد

```powershell
Stop-Process -Id 1234 -Confirm
```

## مهام PowerShell الخلفية

```powershell
Start-Job -ScriptBlock { Get-Process }
```

```powershell
Get-Job
```

```powershell
Receive-Job -Id 1
```

## المهام المجدولة

```powershell
Get-ScheduledTask
```
