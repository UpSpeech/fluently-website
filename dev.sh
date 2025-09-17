#!/bin/bash

# UpSpeech Development Environment Manager

set -e

COMPOSE_FILE="docker-compose.dev.yml"

case "$1" in
  "start"|"up")
    echo "🚀 Starting UpSpeech development environment..."
    docker-compose -f $COMPOSE_FILE up -d
    echo "✅ Services started!"
    echo ""
    echo "📋 Service URLs:"
    echo "   Frontend: http://localhost:3001"
    echo "   Backend:  http://localhost:3000"
    echo "   Database: postgresql://postgres:postgres@localhost:5432/upspeech_development"
    echo "   Redis:    redis://localhost:6379"
    echo "   AI Service: http://localhost:8081"
    echo ""
    echo "📝 Run 'docker-compose -f $COMPOSE_FILE logs -f' to view logs"
    ;;

  "stop"|"down")
    echo "🛑 Stopping UpSpeech development environment..."
    docker-compose -f $COMPOSE_FILE down
    echo "✅ Services stopped!"
    ;;

  "restart")
    echo "🔄 Restarting UpSpeech development environment..."
    docker-compose -f $COMPOSE_FILE down
    docker-compose -f $COMPOSE_FILE up -d
    echo "✅ Services restarted!"
    ;;

  "logs")
    SERVICE=${2:-}
    if [ -n "$SERVICE" ]; then
      docker-compose -f $COMPOSE_FILE logs -f $SERVICE
    else
      docker-compose -f $COMPOSE_FILE logs -f
    fi
    ;;

  "build")
    echo "🔨 Building UpSpeech development images..."
    docker-compose -f $COMPOSE_FILE build --no-cache
    echo "✅ Images built!"
    ;;

  "clean")
    echo "🧹 Cleaning up Docker resources..."
    docker-compose -f $COMPOSE_FILE down -v
    docker system prune -f
    echo "✅ Cleanup complete!"
    ;;

  "status")
    echo "📊 UpSpeech development environment status:"
    docker-compose -f $COMPOSE_FILE ps
    ;;

  "shell")
    SERVICE=${2:-backend}
    echo "🐚 Opening shell in $SERVICE container..."
    docker-compose -f $COMPOSE_FILE exec $SERVICE bash
    ;;

  "migrate")
    echo "🗄️  Running database migrations..."
    docker-compose -f $COMPOSE_FILE exec backend rails db:migrate
    echo "✅ Migrations complete!"
    ;;

  "seed")
    echo "🌱 Seeding database..."
    docker-compose -f $COMPOSE_FILE exec backend rails db:seed
    echo "✅ Database seeded!"
    ;;

  "queue-setup")
    echo "🔧 Setting up Solid Queue tables..."
    docker-compose -f $COMPOSE_FILE exec backend rails runner "load('db/queue_schema.rb')"
    echo "✅ Solid Queue tables created!"
    ;;

  "setup")
    echo "⚙️  Setting up UpSpeech development environment..."
    docker-compose -f $COMPOSE_FILE build
    docker-compose -f $COMPOSE_FILE up -d postgres redis
    echo "⏳ Waiting for database to be ready..."
    sleep 10
    docker-compose -f $COMPOSE_FILE exec backend rails db:create db:migrate db:seed
    echo "🔧 Setting up Solid Queue..."
    docker-compose -f $COMPOSE_FILE exec backend rails runner "load('db/queue_schema.rb')"
    docker-compose -f $COMPOSE_FILE up -d
    echo "✅ Development environment ready!"
    ;;

  *)
    echo "UpSpeech Development Environment Manager"
    echo ""
    echo "Usage: $0 {command}"
    echo ""
    echo "Commands:"
    echo "  start      - Start all services"
    echo "  stop       - Stop all services"
    echo "  restart    - Restart all services"
    echo "  logs       - View logs (optionally specify service)"
    echo "  build      - Build all images"
    echo "  clean      - Stop services and clean up"
    echo "  status     - Show service status"
    echo "  shell      - Open shell in service (default: backend)"
    echo "  migrate    - Run database migrations"
    echo "  seed       - Seed database"
    echo "  queue-setup- Set up Solid Queue tables"
    echo "  setup      - Complete setup (build, migrate, seed, queue)"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 logs frontend"
    echo "  $0 shell backend"
    ;;
esac
