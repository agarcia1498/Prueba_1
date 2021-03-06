USE [master]
GO
/****** Object:  Database [Prueba1]    Script Date: 11/25/2020 12:30:15 AM ******/
CREATE DATABASE [Prueba1]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Prueba1', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Prueba1.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Prueba1_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Prueba1_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Prueba1] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Prueba1].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Prueba1] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Prueba1] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Prueba1] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Prueba1] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Prueba1] SET ARITHABORT OFF 
GO
ALTER DATABASE [Prueba1] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Prueba1] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Prueba1] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Prueba1] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Prueba1] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Prueba1] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Prueba1] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Prueba1] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Prueba1] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Prueba1] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Prueba1] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Prueba1] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Prueba1] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Prueba1] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Prueba1] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Prueba1] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Prueba1] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Prueba1] SET RECOVERY FULL 
GO
ALTER DATABASE [Prueba1] SET  MULTI_USER 
GO
ALTER DATABASE [Prueba1] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Prueba1] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Prueba1] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Prueba1] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Prueba1] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Prueba1', N'ON'
GO
ALTER DATABASE [Prueba1] SET QUERY_STORE = OFF
GO
USE [Prueba1]
GO
/****** Object:  Table [dbo].[Articulos]    Script Date: 11/25/2020 12:30:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Articulos](
	[ID] [numeric](18, 0) NOT NULL,
	[Descripcion] [nvarchar](max) NULL,
	[CostoxUnidad] [numeric](18, 0) NULL,
 CONSTRAINT [PK_Articulos] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cliente]    Script Date: 11/25/2020 12:30:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cliente](
	[Id] [numeric](18, 0) NOT NULL,
	[Nomber] [nvarchar](max) NULL,
 CONSTRAINT [PK_Cliente] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CompraProvDetalle]    Script Date: 11/25/2020 12:30:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompraProvDetalle](
	[IdCompra] [numeric](18, 0) NOT NULL,
	[IdArticulo] [numeric](18, 0) NULL,
	[Cantidad] [numeric](18, 0) NULL,
	[Monto] [numeric](18, 0) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CompraProveedor]    Script Date: 11/25/2020 12:30:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompraProveedor](
	[Id] [numeric](18, 0) NOT NULL,
	[Total] [numeric](18, 0) NULL,
	[Impuesto] [numeric](18, 0) NULL,
	[Fecha] [date] NULL,
 CONSTRAINT [PK_CompraProveedor] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ConsumoCasa]    Script Date: 11/25/2020 12:30:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ConsumoCasa](
	[IdArticulo] [numeric](18, 0) NOT NULL,
	[Cantidad] [numeric](18, 0) NULL,
	[Fecha] [date] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DetalleFact]    Script Date: 11/25/2020 12:30:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DetalleFact](
	[IdFact] [numeric](18, 0) NOT NULL,
	[IdArticulo] [numeric](18, 0) NULL,
	[Cantidad] [numeric](18, 0) NULL,
	[Monto] [numeric](18, 0) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Facturas]    Script Date: 11/25/2020 12:30:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Facturas](
	[Id] [numeric](18, 0) NOT NULL,
	[Total] [numeric](18, 0) NULL,
	[NumeroCajas] [numeric](18, 0) NULL,
	[Fecha] [date] NULL,
 CONSTRAINT [PK_Facturas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HistPagoCliente]    Script Date: 11/25/2020 12:30:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HistPagoCliente](
	[IdPago] [numeric](18, 0) NOT NULL,
	[IdCliente] [numeric](18, 0) NULL,
 CONSTRAINT [PK_HistPagoCliente] PRIMARY KEY CLUSTERED 
(
	[IdPago] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Inventario]    Script Date: 11/25/2020 12:30:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inventario](
	[IdArticulo] [numeric](18, 0) NOT NULL,
	[Cantidad] [numeric](18, 0) NULL,
	[IdProveedor] [numeric](18, 0) NULL,
 CONSTRAINT [PK_Inventario] PRIMARY KEY CLUSTERED 
(
	[IdArticulo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PagoCliente]    Script Date: 11/25/2020 12:30:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PagoCliente](
	[Id] [numeric](18, 0) NOT NULL,
	[Cantidad] [numeric](18, 0) NULL,
	[Fecha] [date] NULL,
 CONSTRAINT [PK_PagoCliente] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Proveedor]    Script Date: 11/25/2020 12:30:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Proveedor](
	[Id] [numeric](18, 0) NOT NULL,
	[Nombre] [nvarchar](max) NULL,
 CONSTRAINT [PK_Proveedor] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoCuenta]    Script Date: 11/25/2020 12:30:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoCuenta](
	[Id] [numeric](18, 0) NOT NULL,
	[Descripcion] [nvarchar](max) NULL,
 CONSTRAINT [PK_TipoCuenta] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Ventas]    Script Date: 11/25/2020 12:30:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ventas](
	[IdCliente] [numeric](18, 0) NOT NULL,
	[IdFactura] [numeric](18, 0) NULL,
	[IdTipoCuenta] [numeric](18, 0) NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Articulos]  WITH CHECK ADD  CONSTRAINT [FK_Articulos_Inventario] FOREIGN KEY([ID])
REFERENCES [dbo].[Inventario] ([IdArticulo])
GO
ALTER TABLE [dbo].[Articulos] CHECK CONSTRAINT [FK_Articulos_Inventario]
GO
ALTER TABLE [dbo].[CompraProvDetalle]  WITH CHECK ADD  CONSTRAINT [FK_CompraProvDetalle_Articulos] FOREIGN KEY([IdArticulo])
REFERENCES [dbo].[Articulos] ([ID])
GO
ALTER TABLE [dbo].[CompraProvDetalle] CHECK CONSTRAINT [FK_CompraProvDetalle_Articulos]
GO
ALTER TABLE [dbo].[CompraProvDetalle]  WITH CHECK ADD  CONSTRAINT [FK_CompraProvDetalle_CompraProveedor] FOREIGN KEY([IdCompra])
REFERENCES [dbo].[CompraProveedor] ([Id])
GO
ALTER TABLE [dbo].[CompraProvDetalle] CHECK CONSTRAINT [FK_CompraProvDetalle_CompraProveedor]
GO
ALTER TABLE [dbo].[ConsumoCasa]  WITH CHECK ADD  CONSTRAINT [FK_ConsumoCasa_Articulos] FOREIGN KEY([IdArticulo])
REFERENCES [dbo].[Articulos] ([ID])
GO
ALTER TABLE [dbo].[ConsumoCasa] CHECK CONSTRAINT [FK_ConsumoCasa_Articulos]
GO
ALTER TABLE [dbo].[DetalleFact]  WITH CHECK ADD  CONSTRAINT [FK_DetalleFact_Articulos] FOREIGN KEY([IdArticulo])
REFERENCES [dbo].[Articulos] ([ID])
GO
ALTER TABLE [dbo].[DetalleFact] CHECK CONSTRAINT [FK_DetalleFact_Articulos]
GO
ALTER TABLE [dbo].[DetalleFact]  WITH CHECK ADD  CONSTRAINT [FK_DetalleFact_Facturas] FOREIGN KEY([IdFact])
REFERENCES [dbo].[Facturas] ([Id])
GO
ALTER TABLE [dbo].[DetalleFact] CHECK CONSTRAINT [FK_DetalleFact_Facturas]
GO
ALTER TABLE [dbo].[HistPagoCliente]  WITH CHECK ADD  CONSTRAINT [FK_HistPagoCliente_Cliente] FOREIGN KEY([IdCliente])
REFERENCES [dbo].[Cliente] ([Id])
GO
ALTER TABLE [dbo].[HistPagoCliente] CHECK CONSTRAINT [FK_HistPagoCliente_Cliente]
GO
ALTER TABLE [dbo].[Inventario]  WITH CHECK ADD  CONSTRAINT [FK_Inventario_Proveedor1] FOREIGN KEY([IdProveedor])
REFERENCES [dbo].[Proveedor] ([Id])
GO
ALTER TABLE [dbo].[Inventario] CHECK CONSTRAINT [FK_Inventario_Proveedor1]
GO
ALTER TABLE [dbo].[PagoCliente]  WITH CHECK ADD  CONSTRAINT [FK_PagoCliente_HistPagoCliente] FOREIGN KEY([Id])
REFERENCES [dbo].[HistPagoCliente] ([IdPago])
GO
ALTER TABLE [dbo].[PagoCliente] CHECK CONSTRAINT [FK_PagoCliente_HistPagoCliente]
GO
ALTER TABLE [dbo].[Ventas]  WITH CHECK ADD  CONSTRAINT [FK_Ventas_Cliente] FOREIGN KEY([IdCliente])
REFERENCES [dbo].[Cliente] ([Id])
GO
ALTER TABLE [dbo].[Ventas] CHECK CONSTRAINT [FK_Ventas_Cliente]
GO
ALTER TABLE [dbo].[Ventas]  WITH CHECK ADD  CONSTRAINT [FK_Ventas_Facturas] FOREIGN KEY([IdFactura])
REFERENCES [dbo].[Facturas] ([Id])
GO
ALTER TABLE [dbo].[Ventas] CHECK CONSTRAINT [FK_Ventas_Facturas]
GO
ALTER TABLE [dbo].[Ventas]  WITH CHECK ADD  CONSTRAINT [FK_Ventas_TipoCuenta] FOREIGN KEY([IdTipoCuenta])
REFERENCES [dbo].[TipoCuenta] ([Id])
GO
ALTER TABLE [dbo].[Ventas] CHECK CONSTRAINT [FK_Ventas_TipoCuenta]
GO
USE [master]
GO
ALTER DATABASE [Prueba1] SET  READ_WRITE 
GO
