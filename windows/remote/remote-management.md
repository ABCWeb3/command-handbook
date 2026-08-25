# الوصول البعيد ونقل الملفات في Windows

## OpenSSH

```powershell
ssh username@server-address
```

```powershell
scp ".\file.txt" username@server-address:/remote/path/
```

## اختبار توفر سطح المكتب البعيد

```powershell
Test-NetConnection -ComputerName server-address -Port 3389
```

## جلسات PowerShell البعيدة

```powershell
Test-WSMan server-address
```

```powershell
Enter-PSSession -ComputerName server-address
```

> [!IMPORTANT]
> فعّل الإدارة البعيدة فقط داخل شبكة موثوقة وبقواعد جدار ناري محددة.
