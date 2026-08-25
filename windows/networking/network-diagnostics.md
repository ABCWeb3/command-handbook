# الشبكات وتشخيصها في Windows

## إعدادات الشبكة وعناوين IP

```powershell
Get-NetIPConfiguration
```

```powershell
Get-NetIPAddress -AddressFamily IPv4
```

## البوابة الافتراضية

```powershell
Get-NetRoute -DestinationPrefix "0.0.0.0/0"
```

## اختبار الوصول وDNS

```powershell
Test-Connection -TargetName 192.168.1.1 -Count 4
```

```powershell
Resolve-DnsName example.com -Server 192.168.1.50
```

## تتبع المسار واختبار منفذ

```powershell
Test-NetConnection example.com -TraceRoute
```

```powershell
Test-NetConnection -ComputerName 192.168.1.190 -Port 5000
```

`TcpTestSucceeded : True` تعني نجاح الاتصال بالمنفذ.

## المنافذ المستمعة وإعدادات DNS

```powershell
Get-NetTCPConnection -State Listen
```

```powershell
Get-DnsClientServerAddress -AddressFamily IPv4
```

## مسح ذاكرة DNS

```powershell
Clear-DnsClientCache
```
